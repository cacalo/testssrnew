import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: "withparams/:params",
  loadComponent: ()=> import("./with-params/with-params.component").then(c => c.WithParamsComponent)
},{
  path: "not-found",
  loadComponent: ()=> import("./not-found/not-found.component").then(c => c.NotFoundComponent)
},
{
  path: "**",
  redirectTo: "not-found"
}];
