import { Component, OnInit } from "@angular/core";
import { InfiniteScrollDirective } from "ngx-infinite-scroll";
import { Model } from "../../navbarModel";
import { ServicePublicar } from "../../services/ServicePublicaciones";

@Component({
  selector: "app-all-publicaciones",
  templateUrl: "./all-publicaciones.component.html",
  styleUrls: ["./all-publicaciones.component.css"]
})
export class AllPublicacionesComponent implements OnInit {
  sum: number = 10;
  array = [];
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

    //{ audio: "https://player.vimeo.com/external/85569724.sd.mp4?s=43df5df0d733011263687d20a47557e4" },
    // { video: "https://player.vimeo.com/external/85569724.sd.mp4?s=43df5df0d733011263687d20a47557e4" },
  ];
  constructor(
    public navbarModel: Model,
    public servicePublicar: ServicePublicar
  ) {
    this.agregar();
    let url = [{ usuario: "123", contrasena: "123" }];
    this.servicePublicar.getpublicaciones(url).subscribe(
      (data: any) => {
        console.log("8585", data);
        this.publicar.push(data[0].PUBLICACIONES);
      },
      err => {
        console.log(err);
      }
    );
  }

  onScrollDown() {
    console.log("scrolled down!!");
    this.navbarModel.dinamic = false;
    this.sum = 20;
    this.agregar();
  }

  agregar() {
    for (let i = 0; i < this.sum; ++i) {
      this.array.push(i);
    }
  }

  onScrollUp() {
    this.navbarModel.dinamic = true;
    console.log("scrolled up!!");
    this.sum = 20;
    this.agregar();
  }
  ngOnInit() {}
}
