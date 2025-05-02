import { Component, effect, inject, OnInit } from "@angular/core";
import { UserService } from "./services/user.service";
import { TodoService } from "./services/todo.service";

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

  constructor() {
    // IMPORTANT: using effect() to track changes in the signal
    effect(() => {
      console.log(`The current users are: ${this.users()}`);
    });
  }

  onUserChange(ele: EventTarget | null) {
    this.todoService.getToDosByUserId(Number((ele as HTMLSelectElement).value));
  }

  ngOnInit(): void {
    this.userService.getUsers();
  }
}
