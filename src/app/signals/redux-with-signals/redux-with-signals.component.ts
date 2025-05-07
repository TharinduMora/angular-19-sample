import { Component, effect, inject, OnInit } from "@angular/core";
import { UserService } from "./services/user.service";
import { ToDo, TodoService } from "./services/todo.service";

@Component({
  selector: "app-redux-with-signals",
  imports: [],
  templateUrl: "./redux-with-signals.component.html",
  styleUrl: "./redux-with-signals.component.scss",
  providers: [],
})
export class ReduxWithSignalsComponent implements OnInit {
  // IMPORTANT: letter `i` must be lowercase for inject
  private userService = inject(UserService);
  private todoService = inject(TodoService);
  users = this.userService.usersList;
  todos = this.todoService.todos;
  isLoading = this.todoService.isLoading;
  showOnlyIncomplete = this.todoService.showOnlyIncomplete;
  filteredTodos = this.todoService.filteredTodos;

  constructor() {
    // IMPORTANT: using effect() to track changes in the signal
    effect(() => {
      console.log(`The current todos are: ${JSON.stringify(this.todos())}`);
    });
  }

  onUserChange(ele: EventTarget | null) {
    this.todoService.getToDosByUserId(Number((ele as HTMLSelectElement).value));
  }

  onTodoStatusChange(todo: ToDo, ele: EventTarget | null) {
    this.todoService.onTodoStatusChange(
      todo,
      Boolean((ele as HTMLInputElement).checked)
    );
  }

  onFilterIncompleteDoTodos(ele: EventTarget | null) {
    this.todoService.onFilterIncompleteDoTodos(
      Boolean((ele as HTMLInputElement).checked)
    );
  }

  ngOnInit(): void {
    this.userService.getUsers();
  }
}
