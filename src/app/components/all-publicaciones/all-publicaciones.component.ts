import { Component, OnInit } from "@angular/core";
import { InfiniteScrollDirective } from "ngx-infinite-scroll";
import { Model } from "../../navbarModel";

@Component({
  selector: "app-all-publicaciones",
  templateUrl: "./all-publicaciones.component.html",
  styleUrls: ["./all-publicaciones.component.css"]
})
export class AllPublicacionesComponent implements OnInit {
  sum: number = 10;
  array = [];
  constructor(public navbarModel: Model) {
    this.agregar();
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
