import { Component, Signal, signal, WritableSignal } from "@angular/core";

@Component({
  selector: "app-angular-generics",
  imports: [],
  templateUrl: "./angular-generics.component.html",
  styleUrl: "./angular-generics.component.scss",
})
export class AngularGenericsComponent {
  snack = signal<Snack>(SNACK);
  user = signal<User>(USER);

  updateSnack() {
    logSignal(this.snack, "name");
    updateProperty(this.snack, "name", "peanut");
    logSignal(this.snack, "name");
  }

  updateUser() {
    updateProperty(this.user, "name", "Frodo");
    logSignal(this.user);
    logSignal(this.user, "name");
  }
}

// IMPORTANT: usage of -> keyof T
export function logSignal<T>(sg: Signal<T>, prop?: keyof T) {
  if (prop) {
    console.log(sg()[prop]);
  }
  console.log(sg());
}

// IMPORTANT: we need to use WritableSignal here, because we need to update the signal and WritableSignal is the only one that allows us to do that
// usage of (K extends keyof T) is to ensure that the property we are updating exists in the object and is of the same type as the value we are passing
export function updateProperty<T, K extends keyof T>(
  sg: WritableSignal<T>,
  prop: K,
  value: T[K]
) {
  sg.update((s) => ({ ...s, [prop]: value }));
}

export const SNACK: Snack = {
  id: 1,
  name: "popcorn",
  price: 2.0,
  isInStock: true,
};
export const USER: User = { id: 5, name: "Bilbo", userName: "Hobbit1" };

export interface Snack {
  id: number;
  name: string;
  price: number;
  isInStock: boolean;
}

export interface User {
  id: number;
  name: string;
  userName: string;
}
