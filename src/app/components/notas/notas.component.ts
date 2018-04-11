import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-notas",
  templateUrl: "./notas.component.html",
  styleUrls: ["./notas.component.css"]
})
export class NotasComponent implements OnInit {
  p: number = 1;
  collection = [];
  constructor() {
    for (var i = 0; i < 10; i++) {
      this.collection.push(i);
    }
    console.log(this.collection);
  }
  ngOnInit() {}
}
