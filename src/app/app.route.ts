import { RouterModule, Routes } from "@angular/router";
import { Component } from "@angular/core/src/metadata/directives";
import { HomeComponent } from "./components/home/home.component";
import { AppComponent } from "./app.component";
import { PublicarComponent } from "./components/publicar/publicar.component";
import { MenuHomeComponent } from "./components/menu-home/menu-home.component";
import { LoginComponent } from "./components/login/login.component";
const APP_ROUTES: Routes = [
  {
    path: "redaca",
    component: HomeComponent,
    children: [
      { path: "home", component: MenuHomeComponent },
      { path: "publicar", component: PublicarComponent },
      { path: "", pathMatch: "full", redirectTo: "home" },
      { path: "**", pathMatch: "full", redirectTo: "home" }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "**", pathMatch: "full", redirectTo: "login" }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
