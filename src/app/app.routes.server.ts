import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'withparams/:params',
    renderMode: RenderMode.Client
  },
  {
    path: "not-found",
    renderMode: RenderMode.Server,
    status: 404
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
