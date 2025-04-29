import { Component, effect, inject, OnInit } from "@angular/core";
import { UserService } from "./services/user.service";

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
  users = this.userService.usersList;

  constructor() {
    // IMPORTANT: using effect() to track changes in the signal
    effect(() => {
      console.log(`The current users are: ${this.users()}`);
    });
  }

  onUserChange() { }

  ngOnInit(): void {
    this.userService.getUsers();
  }

}

