import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl = 'https://next.fugamusic.com/api/v2';

  constructor(private http: HttpClient) {}

  getLogin(name: any) {
    const headerDict = {
      'Content-Type': 'application/json',
      'Access-Control-Expose-Headers': 'Set-Cookie',
    };

    return this.http.post('https://iconbackends.fidisys.com/login', name, {
      observe: 'response',
      withCredentials: true,
      headers: headerDict,
    });
  }

  getlogout() {
    const headerDict = {
      'Content-Type': 'application/json',
    };
    return this.http.get(
      'https://iconbackends.fidisys.com/logout' + '/protected',
      {
        headers: headerDict,
        withCredentials: true,
      }
    );
  }
}
