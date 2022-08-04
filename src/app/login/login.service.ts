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

    return this.http.post('https://iconbackends.fidisys.com/signin', name, {
      observe: 'response',
      withCredentials: true,
      headers: headerDict,
    });
  }

  getAsset() {
    const headerDict = {
      //  samplecookie: `${this.cookie}`,
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get(
      'https://next.fugamusic.com/api/v1/assets?page=0&page_size=15',
      requestOptions
    );
  }

  getasset(name: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        Cookie:
          'connect.sid=s%3AWZ3AGpPxQUspiLw7rgo3uQjSy6uC8VLo.T3TkJ3Y5Q%2FEmjGsX1hr8Ade7gBARJpaag1yrhKhKu84',
      }),
    };

    return this.http.post(
      'https://next.fugamusic.com/api/v1/assets',
      name,
      httpOptions
    );
  }
}
