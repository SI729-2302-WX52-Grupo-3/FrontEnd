import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable, retry, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/login';
import { Patient } from '../interfaces/patient';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  basePath: string = `${environment.serverBasePath}`;
  resourceEndpoint: string = 'patients';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    // Default error handling
    if (error.error instanceof ErrorEvent) {
      console.error(`An error occurred: ${error.error.message}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.log(
        `Backend returned core ${error.status}, body was ${error.error}`
      );
    }
    // Return an observable with a user-facing error message
    return throwError(
      () =>
        new Error('Something happened with request, please try again later.')
    );
  }

  private resourcePath(): string {
    return `${this.basePath}${this.resourceEndpoint}`;
  }

  login(data: Login): Observable<any> {
    return this.http
      .post<any>(`${this.resourcePath()}/login`, data, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  register(data: Patient) {
    return this.http
      .post<any>(`${this.resourcePath()}`, data, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
