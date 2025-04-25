import { Routes } from "@angular/router";
import { SignalsLandingComponent } from "./signals/signals-landing.component";

export const routes: Routes = [
  {
    path: "signals",
    component: SignalsLandingComponent,
    children: [
      {
        path: "redux-with-signals",
        loadComponent: () =>
          import(
            "./signals/redux-with-signals/redux-with-signals.component"
          ).then((m) => m.ReduxWithSignalsComponent),
      },
    ],
  },
  {
    path: "",
    redirectTo: "signals",
    pathMatch: "full",
  },
];
