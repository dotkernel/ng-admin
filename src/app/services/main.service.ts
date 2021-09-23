import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class MainService {
  obj: { data: [] };
  constructor(private http: HttpClient) {}

  /**
   *
   * @param endpoint string
   * @param obj object
   */
  get(endpoint: string, obj: object) {
    let link = "";
    if (endpoint !== "" && obj !== null) {
      endpoint = endpoint.replace(":", "/");
      if (obj.hasOwnProperty("uuid")) {
        endpoint = endpoint.replace("uuid", obj["uuid"]);
        link = environment.apiUrl + endpoint;
      } else {
        window.alert("Something went wrong!");
      }
      this.http.get(link).subscribe((response) => {
        console.log(response);
      });
    } else {
      window.alert("Something went wrong!");
    }
  }

  /**
   *
   * @param val string
   * @param val2 object
   */
  post(val: string, val2: object) {
    if (val !== "" && val2 !== null) {
      const link = environment.apiUrl + val;
      this.http.post(link, val2).subscribe();
    } else {
      window.alert("Something went wrong!");
    }
  }
  //@TODO
  delete() {}
  //@TODO
  patch() {}
}
