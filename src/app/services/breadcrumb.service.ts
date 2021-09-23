import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BreadcrumbService {
  words = [];
  currentPage: string = "";
  data = [];
  obj: { data: [] };
  constructor() {}

  /**
   *
   * @param url
   * @returns array[[elem1,elem2,..], currentPage]
   */
  bredcrumb(url) {
    this.words = [];
    this.data = [];

    url.split("/").forEach((element) => {
      if (element != "" && element != "main") {
        this.words.push(element);
      }
    });

    this.currentPage = this.words[this.words.length - 1];
    this.data.push(this.words);
    this.data.push(this.currentPage);

    return this.data;
  }
}
