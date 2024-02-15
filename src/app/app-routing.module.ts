import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: "",
    redirectTo: "administracion",
    pathMatch: "full"
  },
  {
    path: "administracion",
    loadChildren: () => import("./administracion/administracion.module").then((modulos) => modulos.AdministracionModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
