import { Component, OnInit } from "@angular/core";
import { InfiniteScrollDirective } from "ngx-infinite-scroll";
@Component({
  selector: "app-horarios",
  templateUrl: "./horarios.component.html",
  styleUrls: ["./horarios.component.css"]
})
export class HorariosComponent implements OnInit {
  selector: string = ".scrollHome2";
  constructor() {}

  onScrollDown() {
    console.log("scrolled down!!");
  }

  onScrollUp() {
    console.log("scrolled up!!");
  }
  ngOnInit() {}
}
