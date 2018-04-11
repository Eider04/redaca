import { Component, OnInit } from "@angular/core";
import { Model } from "../../navbarModel";
import { ServicePublicar } from "../../services/ServicePublicaciones";
import Swal from "sweetalert2";
import $ from "jquery";
@Component({
  selector: "app-only-imagen",
  templateUrl: "./only-imagen.component.html",
  styleUrls: ["./only-imagen.component.css"]
})
export class OnlyImagenComponent implements OnInit {
  publicar = [
    {
      ARCHIVOURL:
        "https://i.pinimg.com/736x/5d/a0/8d/5da08d24bc4c7d2847ee5dfa1604b114--naruto-shippudden-naruto-pics.jpg"
    },
    {
      ARCHIVOURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xUPhH3XjQVmE1XvGaq1HTDvCbQUIOF_kGwzivtfm7Jl6VCH_"
    },

    {
      ARCHIVOURL:
        "https://i.pinimg.com/736x/5d/a0/8d/5da08d24bc4c7d2847ee5dfa1604b114--naruto-shippudden-naruto-pics.jpg"
    }
  ];
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
            if (data[i].TIPOS === "2") {
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

  onScrollDown() {
    console.log("scrolled down!!");
    this.navbarModel.dinamic = false;
  }

  onScrollUp() {
    this.navbarModel.dinamic = true;
    console.log("scrolled up!!");
  }
  ngOnInit() {}
}
