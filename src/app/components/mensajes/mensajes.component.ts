import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mensajes",
  templateUrl: "./mensajes.component.html",
  styleUrls: ["./mensajes.component.css"]
})
export class MensajesComponent implements OnInit {
  publicar = [];
  p: number = 1;
  collection = [];
  constructor() {
    for (var i = 0; i < 20; i++) {
      this.collection.push(i);
    }
    console.log(this.collection);
  }

  ngOnInit() {}
}
