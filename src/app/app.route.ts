import { RouterModule, Routes } from "@angular/router";
import { Component } from "@angular/core/src/metadata/directives";
import { HomeComponent } from "./components/home/home.component";
import { AppComponent } from "./app.component";
const APP_ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
