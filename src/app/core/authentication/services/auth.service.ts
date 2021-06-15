import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {Token} from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenDataSubject: BehaviorSubject<Token>;
  public token: Observable<Token>;

  constructor(private router: Router,
              private http: HttpClient) {
    this.tokenDataSubject = new BehaviorSubject<Token>(JSON.parse(localStorage.getItem('tokenData')));
    this.token = this.tokenDataSubject.asObservable();
  }

  public goTo(destination: string): void {
    console.log(destination);

    this.router.navigate([destination]);
  }

  public get tokenData(): Token {
    return this.tokenDataSubject.value;
  }

  login(username: string, password: string) {
    const data = new FormData();
    data.append('grant_type', 'password');
    data.append('username', username);
    data.append('password', password);
    data.append('client_id', 'dotkernel');
    data.append('client_secret', 'dotkernel');
    data.append('scope', 'admin');
    return this.http.post<any>(`${environment.apiUrl}/oauth2/generate`, data)
      .pipe(map(tokenData => {
        // store token in local storage to keep user logged in between page refreshes
        tokenData.timestamp = new Date().getTime();
        localStorage.setItem('tokenData', JSON.stringify(tokenData));
        this.tokenDataSubject.next(tokenData);
        return tokenData;
      }));
  }

  logout() {
    // remove token from local storage to log user out
    localStorage.removeItem('tokenData');
    this.tokenDataSubject.next(null);
  }
}
