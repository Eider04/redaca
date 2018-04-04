import { Component, OnInit } from "@angular/core";
import { Model } from "../../navbarModel";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  tab: string;
  constructor(public navbarModel: Model) {
    this.navbarModel.dinamic = true;
  }

  ngOnInit() {}
}
