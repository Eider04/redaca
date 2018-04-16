import { Component, OnInit } from "@angular/core";
import swal from "sweetalert2";
@Component({
  selector: "app-solicitud-registro",
  templateUrl: "./solicitud-registro.component.html",
  styleUrls: ["./solicitud-registro.component.css"]
})
export class SolicitudRegistroComponent implements OnInit {
  p: number = 1;
  collection = [];
  loading = false;
  constructor() {
    this.agregar();
  }

  onScrollDown() {
    console.log("scrolled down!!");
    this.agregar();
  }

  agregar() {
    this.loading = true;
    setTimeout(() => {
      for (var i = 0; i < 20; i++) {
        this.collection.push(i);
      }
      this.loading = false;
    }, 2000);

    console.log(this.collection);
  }

  onScrollUp() {
    console.log("scrolled up!!");
  }

  aprobar() {
    console.log("aasaaaaaaaaaaaaaaaaaaa");
    swal({
      title: "¿Desea aprobar la solicitud",
      text: "",
      type: "question",
      showCancelButton: true,
      confirmButtonText: "Si, aprobar",
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      preConfirm: E => {
        return new Promise(resolve => {
          setTimeout(() => {
            swal({
              title: "Autorizacion exitosa",
              text: "La solicitud del usuario a sido aprobada con exito.",
              timer: 4000,
              type: "success"
            });
          }, 1000);
        });
      }
    });
  }

  ngOnInit() {}
}
