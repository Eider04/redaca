import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-publicar",
  templateUrl: "./publicar.component.html",
  styleUrls: ["./publicar.component.css"]
})
export class PublicarComponent implements OnInit {
  constructor() {}

  publicar() {
    /*     if (file) {
      var reader = new FileReader();
      reader.onload = e => {
        swal({
          title: "Your uploaded picture",
          imageUrl: e.target.result,
          imageAlt: "The uploaded picture"
        });
      };
      reader.readAsDataURL(file);
    } */
  }
  ngOnInit() {}
}
