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
  constructor() {
    for (var i = 0; i < 100; i++) {
      this.collection.push(i);
    }
    console.log(this.collection);
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
