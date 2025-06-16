import { Routes } from "@angular/router";
import { SignalsLandingComponent } from "./signals/signals-landing.component";
import { HydrationComponent } from "./common/hydration/hydration.component";
import { hydrationResolver } from "./common/hydration/hydration.resolver";
import { RenderModeComponent } from "./ssr/render-mode/render-mode.component";
import { ClientComponent } from "./ssr/render-mode/client/client.component";
import { ServerComponent } from "./ssr/render-mode/server/server.component";
import { PrerenderComponent } from "./ssr/render-mode/prerender/prerender.component";
import { DeferrableViewsComponent } from "./ssr/deferrable-views/deferrable-views.component";
import { CommonComponent } from "./common/common.component";
import { AngularGenericsComponent } from "./common/angular-generics/angular-generics.component";

export const routes: Routes = [
  {
    path: "signals",
    component: SignalsLandingComponent,
    children: [
      {
        path: "signals-basics",
        loadComponent: () =>
          import("./signals/signal-basics/signal-basics.component").then(
            (m) => m.SignalBasicsComponent
          ),
      },
      {
        path: "redux-with-signals",
        loadComponent: () =>
          import(
            "./signals/redux-with-signals/redux-with-signals.component"
          ).then((m) => m.ReduxWithSignalsComponent),
      },
      {
        path: "",
        redirectTo: "signals-basics",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "render-mode",
    component: RenderModeComponent,
    children: [
      {
        path: "client",
        component: ClientComponent,
      },
      {
        path: "server",
        component: ServerComponent,
      },
      {
        path: "prerender",
        component: PrerenderComponent,
      },
      {
        path: "",
        redirectTo: "client",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "deferrable-views",
    loadComponent: () =>
      import("./ssr/deferrable-views/deferrable-views.component").then(
        (m) => m.DeferrableViewsComponent
      ),
  },
  {
    path: "common",
    component: CommonComponent,
    children: [
      {
        path: "angular-generics",
        component: AngularGenericsComponent,
      },
      {
        path: "hydration",
        component: HydrationComponent,
        resolve: {
          hydrationResolver,
        },
      },
      {
        path: "",
        redirectTo: "angular-generics",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "rxjs",
    loadComponent: () => import("./rxjs/rxjs.component").then(
      (m) => m.RxjsComponent)
  },
  {
    path: "",
    redirectTo: "signals",
    pathMatch: "full",
  },
];
