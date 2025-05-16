import { ResolveFn } from "@angular/router";
import { map, timer } from "rxjs";

export const hydrationResolver: ResolveFn<boolean> = (route, state) => {
  return timer(3).pipe(map(() => true));
  // watch this video https://www.youtube.com/watch?v=2tHozZWMm18
};
