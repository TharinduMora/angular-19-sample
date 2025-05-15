import { Routes } from "@angular/router";
import { SignalsLandingComponent } from "./signals/signals-landing.component";
import { HydrationComponent } from "./ssr/hydration/hydration.component";
import { hydrationResolver } from "./ssr/hydration/hydration.resolver";
import { RenderModeComponent } from "./ssr/render-mode/render-mode.component";
import { ClientComponent } from "./ssr/render-mode/client/client.component";
import { ServerComponent } from "./ssr/render-mode/server/server.component";
import { PrerenderComponent } from "./ssr/render-mode/prerender/prerender.component";

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
      {
        path: "",
        redirectTo: "redux-with-signals",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "hydration",
    component: HydrationComponent,
    resolve: {
      hydrationResolver,
    },
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
    path: "",
    redirectTo: "signals",
    pathMatch: "full",
  },
];
