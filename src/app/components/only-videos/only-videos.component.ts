import { Component, OnInit } from "@angular/core";
import { ServicePublicar } from "../../services/ServicePublicaciones";
import { Model } from "../../navbarModel";

@Component({
  selector: "app-only-videos",
  templateUrl: "./only-videos.component.html",
  styleUrls: ["./only-videos.component.css"]
})
export class OnlyVideosComponent implements OnInit {
  publicar = [
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

  ngOnInit() {}
}
