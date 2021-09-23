import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { BreadcrumbService } from "../../services/breadcrumb.service";
import { MainService } from "../../services/main.service";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.css"],
  providers: [BreadcrumbService, MainService],
})
export class BreadcrumbComponent {
  words = [];
  currentPage: string = "";
  result = [];
  path = "";
  constructor(
    private router: Router,
    private breadcrumbService: BreadcrumbService,
    private ceva: MainService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.words = [];
        this.currentPage = "";
        this.result = [];
        this.path = "";
        let obj = {
          uuid: "string",
        };

        this.result = this.breadcrumbService.bredcrumb(event.url);
        this.words = this.result[0];

        this.currentPage = this.result[1];
        this.ceva.post("ceva", this.result);
        obj.uuid = "1234-1234-1234";
        this.ceva.get("ceva:uuid", obj);
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
  // let url = "ceva213123-4325-32432-435-2342"
  // let obj = {
  //   name: "string",
  //   name2: "string"
  // }
  // this.mainService.bredcrumb(url,obj);
}
