import { RouterModule, Routes } from "@angular/router";
import { Component } from "@angular/core/src/metadata/directives";
import { HomeComponent } from "./components/home/home.component";
import { AppComponent } from "./app.component";
import { PublicarComponent } from "./components/publicar/publicar.component";
import { MenuHomeComponent } from "./components/menu-home/menu-home.component";
import { LoginComponent } from "./components/login/login.component";
import { NotasComponent } from "./components/notas/notas.component";
import { HorariosComponent } from "./components/horarios/horarios.component";
import { SolicitudRegistroComponent } from "./components/solicitud-registro/solicitud-registro.component";

import { MensajesComponent } from "./components/mensajes/mensajes.component";
import { NotificacionesComponent } from "./components/notificaciones/notificaciones.component";
import { ContactosComponent } from "./components/contactos/contactos.component";

import { PreguntasComponent } from "./components/preguntas/preguntas.component";
const APP_ROUTES: Routes = [
  {
    path: "redaca",
    component: HomeComponent,
    children: [
      { path: "home", component: MenuHomeComponent },
      { path: "publicar", component: PublicarComponent },

      { path: "mensajes", component: MensajesComponent },
      { path: "notificaciones", component: NotificacionesComponent },
      { path: "contactos", component: ContactosComponent },

      { path: "preguntas", component: ContactosComponent },
      { path: "notas", component: NotasComponent },
      { path: "horarios", component: HorariosComponent },
      { path: "registroUsuarios", component: SolicitudRegistroComponent },

      { path: "", pathMatch: "full", redirectTo: "home" },
      { path: "**", pathMatch: "full", redirectTo: "home" }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "**", pathMatch: "full", redirectTo: "login" }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
