import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {Token} from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenDataSubject: BehaviorSubject<Token>;
  public token: Observable<Token>;
  private userAccountSubject: BehaviorSubject<any>;
  public userAccount: Observable<any>;

  constructor(private router: Router,
              private http: HttpClient) {
    this.tokenDataSubject = new BehaviorSubject<Token>(JSON.parse(localStorage.getItem('tokenData')));
    this.token = this.tokenDataSubject.asObservable();
  }

  public goTo(destination: string): void {
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
    data.append('client_id', 'admin');
    data.append('client_secret', 'admin');
    data.append('scope', 'api');
    return this.http.post<any>(`${environment.apiUrl}security/generate-token`, data)
      .pipe(map(tokenData => {
        // store token in local storage to keep user logged in between page refreshes
        tokenData.timestamp = new Date().getTime();
        localStorage.setItem('tokenData', JSON.stringify(tokenData));
        this.tokenDataSubject.next(tokenData);
        return tokenData;
      }));
  }

  getUserAccount() {
    return this.http.get(environment.apiUrl + `user/my-account`)
      .pipe(map((res: any) => {
        this.userAccountSubject.next(res);
        return res;
      }),
    );
  }

  logout() {
    // remove token from local storage to log user out
    localStorage.removeItem('tokenData');
    this.tokenDataSubject.next(null);
    this.router.navigate(['auth/login']);
  }

  register(user) {
    return this.http.post(`${environment.apiUrl}account/register`, user);
  }

  activateUser(hash) {
    return this.http.patch(`${environment.apiUrl}account/activate/${hash}`, null);
  }
}
