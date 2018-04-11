//core angular
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

//materialize
import { MaterializeModule } from "angular2-materialize";
import "materialize-css";

//componentes
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { OnlyImagenComponent } from "./components/only-imagen/only-imagen.component";
import { OnlyVideosComponent } from "./components/only-videos/only-videos.component";
import { OnlyAudiosComponent } from "./components/only-audios/only-audios.component";
import { AllPublicacionesComponent } from "./components/all-publicaciones/all-publicaciones.component";
import { MensajesComponent } from "./components/mensajes/mensajes.component";
import { NotificacionesComponent } from "./components/notificaciones/notificaciones.component";
import { ContactosComponent } from "./components/contactos/contactos.component";
import { PublicarComponent } from "./components/publicar/publicar.component";
import { ComentariosComponent } from "./components/comentarios/comentarios.component";
import { PerfilComponent } from "./components/perfil/perfil.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

//rutas
import { APP_ROUTING } from "./app.route";
import { Model } from "./navbarModel";
//scroll
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { Navbar2Component } from "./components/navbar2/navbar2.component";
import { ServicePublicar } from "./services/ServicePublicaciones";
import { MenuHomeComponent } from "./components/menu-home/menu-home.component";

//carrusel
import { NgxCarouselModule } from "ngx-carousel";
import "hammerjs";

// paginator
import { NgxPaginationModule } from "ngx-pagination"; // <-- import the module

import { NotasComponent } from "./components/notas/notas.component";
import { HorariosComponent } from "./components/horarios/horarios.component";
import { SolicitudRegistroComponent } from "./components/solicitud-registro/solicitud-registro.component";
import { PreguntasComponent } from './components/preguntas/preguntas.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    OnlyImagenComponent,
    OnlyVideosComponent,
    OnlyAudiosComponent,
    AllPublicacionesComponent,
    MensajesComponent,
    NotificacionesComponent,
    ContactosComponent,
    PublicarComponent,
    ComentariosComponent,
    PerfilComponent,
    NavbarComponent,
    Navbar2Component,
    MenuHomeComponent,
    NotasComponent,
    HorariosComponent,
    SolicitudRegistroComponent,
    PreguntasComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    APP_ROUTING,
    FormsModule,
    InfiniteScrollModule,
    HttpClientModule,
    NgxCarouselModule,
    NgxPaginationModule
  ],
  providers: [Model, ServicePublicar],
  bootstrap: [AppComponent]
})
export class AppModule {}
