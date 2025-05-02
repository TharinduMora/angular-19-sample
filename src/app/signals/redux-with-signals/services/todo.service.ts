import { HttpClient } from "@angular/common/http";
import { computed, inject, Injectable, signal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { map, Subject, switchMap, take, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  private url = "https://dummyjson.com/todos/user/";
  private http = inject(HttpClient);

  userSelected = new Subject<number>();
  userSelected$ = this.userSelected.asObservable();

  //   state
  private todoState = signal<ToDoState>({
    selectedUserId: undefined,
    todos: [],
    isLoading: false,
    error: undefined,
  });

  //   selectors
  todos = computed(() => this.todoState().todos);
  isLoading = computed(() => this.todoState().isLoading);
  error = computed(() => this.todoState().error);
  selectedUserId = computed(() => this.todoState().selectedUserId);

  //   actions
  setSelectedUserId(userId: number) {
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

  constructor() {
    this.userSelected$
      .pipe(
        tap(() => this.setLoading(true)),
        tap((x: number) => this.setSelectedUserId(x)),
        switchMap(() => this.getToDos()),
        takeUntilDestroyed()
      )
      .subscribe((todos: ToDo[]) => {
        this.setToDos(todos);
        this.setLoading(false);
      });
  }

  getToDos() {
    return this.http
      .get<{ todos: ToDo[] }>(`${this.url}${this.selectedUserId()}`)
      .pipe(map((res) => res.todos));
  }

  getToDosByUserId(userId: number) {
    this.userSelected.next(userId);
  }
}

export interface ToDoState {
  selectedUserId: number | undefined;
  todos: ToDo[];
  isLoading: boolean;
  error: string | undefined;
}

export interface ToDo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
