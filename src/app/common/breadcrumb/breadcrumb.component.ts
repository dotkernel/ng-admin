import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.css"],
})
export class BreadcrumbComponent {
  words = [];
  currentPage: string = "";
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.words = [];
        event.url.split("/").forEach((element) => {
          if (element != "" && element != "main") {
            this.words.push(element);
          }
        });
        this.currentPage = this.words[this.words.length - 1];
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
