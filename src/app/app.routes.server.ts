import { RenderMode, ServerRoute } from "@angular/ssr";

export const serverRoutes: ServerRoute[] = [
  {
    path: "hydration",
    renderMode: RenderMode.Client,
  },
  {
    path: "signals",
    renderMode: RenderMode.Server,
  },
  {
    path: "render-mode/client",
    renderMode: RenderMode.Client,
  },
  {
    path: "render-mode/server",
    renderMode: RenderMode.Server,
  },
  {
    path: "render-mode/prerender",
    renderMode: RenderMode.Prerender,
  },
  {
    path: "**",
    renderMode: RenderMode.Client,
  },
];
