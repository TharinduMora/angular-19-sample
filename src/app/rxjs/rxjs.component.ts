import { AsyncPipe, JsonPipe } from "@angular/common";
import { Component } from "@angular/core";
import { filter, interval, map, of, switchMap } from "rxjs";

const userListObj = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Doe" },
];

@Component({
  selector: "app-rxjs",
  imports: [AsyncPipe, JsonPipe],
  templateUrl: "./rxjs.component.html",
  styleUrl: "./rxjs.component.scss",
})
export class RxjsComponent {
  // 'of' creates an observable that emits the provided value (array or primitive)
  users$ = of(userListObj);

  // The pipe method allows us to transform observable data using operators like map, filter, etc.
  usernames$ = this.users$.pipe(map((users) => users.map((user) => user.name)));

  // 'interval' creates an observable that emits sequential numbers every specified interval (in milliseconds)
  // 'switchMap' is used to switch to a new observable when the source emits a value
  secondsCounter$ = interval(1000).pipe(
    switchMap(() => of(new Date().getSeconds()))
  );

  // 'filter' is used to filter emitted values based on a condition
  evenSecondsCounter$ = this.secondsCounter$.pipe(
    filter((seconds) => seconds % 2 === 0)
  );
}
