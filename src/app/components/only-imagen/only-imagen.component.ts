import { Component, OnInit } from "@angular/core";
import { Model } from "../../navbarModel";
import { ServicePublicar } from "../../services/ServicePublicaciones";

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

  ngOnInit() {}
}
