import { Component, OnInit } from "@angular/core";
import { ServicePublicar } from "../../services/ServicePublicaciones";
import { Model } from "../../navbarModel";
import Swal from "sweetalert2";
import $ from "jquery";
@Component({
  selector: "app-only-videos",
  templateUrl: "./only-videos.component.html",
  styleUrls: ["./only-videos.component.css"]
})
export class OnlyVideosComponent implements OnInit {
  publicar = [
    {
      ARCHIVOURL:
        "assets/Ingenieria de Requisitos   Captura y analisis de Requisitos - p2 - Tutoriales y mas.mp4"
    },
    {
      ARCHIVOURL:
        "assets/Ingenieria de Requisitos   Definicion de Requisitos - p3 - Tutoriales y mas.mp4"
    },
    {
      ARCHIVOURL:
        "assets/Ingeniería de Requisitos   Introducción y Estudio de Factibilidad - p1 - Tutoriales y mas -.mp4"
    },
    {
      ARCHIVOURL:
        "assets/Ingenieria de Requisitos   Requerimientos de Usuario - p4 - Tutoriales y mas.mp4"
    },
    {
      ARCHIVOURL:
        "assets/Ingeniería de Requisitos   Validación de requisitos - p5 - Tutoriales y mas.mp4"
    }
  ];
  /*  publicar = [
    {
      ARCHIVOURL: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
    },
    {
      ARCHIVOURL: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
    },
    {
      ARCHIVOURL: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
    },
    {
      ARCHIVOURL: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
    },
    {
      ARCHIVOURL: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
    },
    {
      ARCHIVOURL: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
    }
  ]; */
  constructor(
    public navbarModel: Model,
    public servicePublicar: ServicePublicar
  ) {
    let url = [{ usuario: "123", contrasena: "123" }];
    this.servicePublicar.getpublicaciones(url).subscribe(
      (data: any) => {
        console.log("8585", data);
        if (data) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].TIPOS === "3") {
              this.publicar.push(data[i]);
            }
          }
        } else {
          // this.storage.remove("DatosUsuario");
          //  this.navCtrl.push(Login);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  onScrollUp2() {
    this.navbarModel.dinamic = true;
    console.log("scrolled up!!");
  }
  onScrollDown2() {
    console.log("scrolled down!!");
    this.navbarModel.dinamic = false;
  }

  onScrollDown() {
    console.log("scrolled down!!");
    this.navbarModel.dinamic = false;
    this.agregar();
  }

  agregar() {
    for (let i = 0; i < 20; ++i) {
      this.publicar.push({
        ARCHIVOURL: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      });
    }
  }

  onScrollUp() {
    this.navbarModel.dinamic = true;
    console.log("scrolled up!!");
  }

  Comentarios() {
    Swal({
      width: 800,
      showCancelButton: false,
      showConfirmButton: false,
      html: `
    <div class="row">
         <div class="col s12 m-12 l-12">
            <div class="card cyan center" >
                <h4 class="header white-text">Comentarios</h4>
            </div>
            <div class="card horizontal" >
                <div class="card-image hide-on-med-and-down">
                    <img class="materialboxed" src="https://i.pinimg.com/736x/5d/a0/8d/5da08d24bc4c7d2847ee5dfa1604b114--naruto-shippudden-naruto-pics.jpg">
                </div>

                <div class="card-content">

                <ul class="collection " style="border: 0px; box-shadow: none !important;margin-top:0; height: 190px;overflow-y: scroll;">

                  <li class="collection-item avatar">
                    <i class="material-icons circle">person_pin</i>
                    <p>First Line </p>
                    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                  </li>
                  <li class="collection-item avatar">
                    <i class="material-icons circle green">person_pin</i>
                    <p>First Line </p>
                    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                  </li>

                  <li class="collection-item avatar">
                    <i class="material-icons circle">person_pin</i>
                    <p>First Line </p>
                    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                  </li>
                  <li class="collection-item avatar">
                    <i class="material-icons circle green">person_pin</i>
                    <p>First Line </p>
                    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                  </li>

                  <li class="collection-item avatar">
                    <i class="material-icons circle">person_pin</i>
                    <p>First Line </p>
                    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                  </li>
                  <li class="collection-item avatar">
                    <i class="material-icons circle green">person_pin</i>
                    <p>First Line </p>
                    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                  </li>
   
                </ul>

                   <form>
                      <div class="row">
                        <div class="input-field col s12">
                          <i class="material-icons prefix">mode_edit</i>
                          <textarea id="icon_prefix2" placeholder="ingrese comentario" class="materialize-textarea"></textarea>
                        </div>
                  
                          <div class="input-field card-action col s12 m6 l6">
                              <a id="close" style="border-radius: 100px;" class="waves-effect teal cyan-light btn">Cancelar</a>
                          </div>
                          <div id="comentar" class="input-field card-action col s12 m6 l6">
                              <a  style="border-radius: 100px;" class="waves-effect cyan cyan-light btn">Comentar</a>
                          </div>
                        </div>
                  </form>

                

                </div>

            </div>
        </div>
      </div>
        
        `
    });

    $("#comentar").click(function() {
      Swal.close();
    });

    $("#close").click(function() {
      Swal.close();
    });
  }
  ngOnInit() {}
}
