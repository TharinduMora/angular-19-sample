import { Component, computed, effect, signal } from "@angular/core";

@Component({
  selector: "app-signal-basics",
  imports: [],
  templateUrl: "./signal-basics.component.html",
  styleUrl: "./signal-basics.component.scss",
})
export class SignalBasicsComponent {
  // Writable signals
  counter = signal(0); // writable signal. it allows you to change its value
  dynamicArray = signal([1, 2, 3]); // writable signal with an array

  // Computed signals
  length = signal(1);
  breadth = signal(1);
  area = computed(() => this.length() * this.breadth()); // computed signal. it is read-only and depends on other signals

  constructor() {
    // Using effect() to track changes in the signal.
    // This is being triggered whenever the value of the signal changes and initially when the component is created.
    effect(() => {
      console.log(`The current Area is : ${this.area()}`);
    });
  }

  increment() {
    // this.counter() = this.counter() + 1; // this cannot be done with signals. Instead, use the set or update methods
    // this.counter.set(this.counter() + 1); // set method to update the value. This can be done.
    this.counter.update((value) => value + 1);
  }

  addItem() {
    // this.dynamicArray.mutate((value) => value.push(4)); // this is deprecated, use update instead
    this.dynamicArray.update((value) => [...value, value.length + 1]);
  }

  onChangeLength(event: Event) {
    const input = event.target as HTMLInputElement;
    this.length.set(Number(input.value));
  }

  onChangeBreadth(event: Event) {
    const input = event.target as HTMLInputElement;
    this.breadth.set(Number(input.value));
  }
}
