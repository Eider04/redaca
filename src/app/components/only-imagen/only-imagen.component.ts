import { Component, OnInit } from "@angular/core";
import { Model } from "../../navbarModel";
import { ServicePublicar } from "../../services/ServicePublicaciones";

@Component({
  selector: "app-only-imagen",
  templateUrl: "./only-imagen.component.html",
  styleUrls: ["./only-imagen.component.css"]
})
export class OnlyImagenComponent implements OnInit {
  publicar = [];
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

  ngOnInit() {}
}
