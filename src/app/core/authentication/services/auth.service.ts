import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public goTo(destination: string): void {
    console.log(destination);
    
    this.router.navigate([destination]);
  }
}
