import { RenderMode, ServerRoute } from "@angular/ssr";

export const serverRoutes: ServerRoute[] = [
  {
    path: "signals",
    renderMode: RenderMode.Client,
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
