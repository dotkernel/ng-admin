import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public showSideNav: BehaviorSubject<any> = new BehaviorSubject(true);

  constructor() { }

  setToggle(value: any) {
    this.showSideNav.next(value);
  };
  
  getToggle(): Observable<any> {
    return this.showSideNav as Observable<any>
  }
}
