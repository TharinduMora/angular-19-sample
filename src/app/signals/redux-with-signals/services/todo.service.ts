import { HttpClient } from "@angular/common/http";
import { computed, inject, Injectable, signal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { map, of, Subject, switchMap, take, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  private url = "https://dummyjson.com/todos/user/";
  private http = inject(HttpClient);

  // Use a subject to react to changes that need an async operation
  userSelected = new Subject<number>();
  userSelected$ = this.userSelected.asObservable();

  //   state
  private todoState = signal<ToDoState>({
    selectedUserId: undefined,
    todos: [],
    isLoading: false,
    error: undefined,
    showOnlyIncomplete: false,
  });

  //   selectors
  todos = computed(() => this.todoState().todos);
  isLoading = computed(() => this.todoState().isLoading);
  error = computed(() => this.todoState().error);
  selectedUserId = computed(() => this.todoState().selectedUserId);
  showOnlyIncomplete = computed(() => this.todoState().showOnlyIncomplete);
  filteredTodos = computed(() => {
    if (this.showOnlyIncomplete()) {
      return this.todos().filter((todo) => !todo.completed);
    } else {
      return this.todos();
    }
  });

  //   actions
  setSelectedUserId(userId: number) {
    if (!userId) {
      this.todoState.set({
        selectedUserId: undefined,
        todos: [],
        isLoading: false,
        error: undefined,
        showOnlyIncomplete: false,
      });
    }
    this.todoState.update((state) => ({
      ...state,
      selectedUserId: userId,
    }));
  }

  setLoading(loading: boolean) {
    this.todoState.update((state) => ({
      ...state,
      isLoading: loading,
    }));
  }

  setToDos(todos: ToDo[]) {
    this.todoState.update((state) => ({
      ...state,
      todos: todos,
    }));
  }

  // Reducers
  // Define how actions should update state
  constructor() {
    this.userSelected$
      .pipe(
        tap(() => this.setLoading(true)),
        tap((x: number) => this.setSelectedUserId(x)),
        switchMap((id) => this.getToDos(id)),
        takeUntilDestroyed()
      )
      .subscribe((todos: ToDo[]) => {
        this.setToDos(todos);
        this.setLoading(false);
      });
  }

  getToDos(id: number) {
    if (!id) return of([]);
    return this.http
      .get<{ todos: ToDo[] }>(`${this.url}${id}`)
      .pipe(map((res) => res.todos));
  }

  getToDosByUserId(userId: number) {
    this.userSelected.next(userId);
  }

  onTodoStatusChange(todo: ToDo, checked: boolean) {
    this.todoState.update((state) => ({
      ...state,
      todos: state.todos.map((t) =>
        t.id === todo.id ? { ...t, completed: checked } : t
      ),
    }));
  }

  onFilterIncompleteDoTodos(checked: boolean) {
    this.todoState.update((state) => ({
      ...state,
      showOnlyIncomplete: checked,
    }));
  }
}

export interface ToDoState {
  selectedUserId: number | undefined;
  todos: ToDo[];
  isLoading: boolean;
  error: string | undefined;
  showOnlyIncomplete: boolean;
}

export interface ToDo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
