import { Component, OnInit } from "@angular/core";
import { Model } from "../../navbarModel";
@Component({
  selector: "app-menu-home",
  templateUrl: "./menu-home.component.html",
  styleUrls: ["./menu-home.component.css"]
})
export class MenuHomeComponent implements OnInit {
  tab: string;
  constructor(public navbarModel: Model) {
    this.navbarModel.dinamic = true;
  }

  onScrollDown() {
    console.log("scrolled down!!");
    this.navbarModel.dinamic = false;
  }

  onScrollUp() {
    this.navbarModel.dinamic = true;
    console.log("scrolled up!!");
  }
  ngOnInit() {}
}
