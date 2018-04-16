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
      for (var i = 0; i < 8; i++) {
        this.collection.push(i);
      }
      this.loading = false;
    }, 1000);

    console.log(this.collection);
  }

  onScrollUp() {
    console.log("scrolled up!!");
  }

  ngOnInit() {}
}
