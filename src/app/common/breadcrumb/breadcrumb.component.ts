import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { MainService } from "../../services/main.service";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.css"],
  providers: [MainService],
})
export class BreadcrumbComponent {
  words = [];
  currentPage: string = "";
  result = [];
  path = "";
  constructor(private router: Router, private mainService: MainService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.words = [];
        this.currentPage = "";
        this.result = [];
        this.path = "";

        this.result = this.mainService.bredcrumb(event.url);
        this.words = this.result[0];

        this.currentPage = this.result[1];
      }
    });
  }
  getUrl(arr, index) {
    let path = "";
    for (let i = 0; i <= index; i++) {
      path = path + arr[i] + "/";
    }
    return ["/main/" + path];
  }
}
