import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable, retry, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
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

  getAll(): Observable<any> {
    return this.http
      .get<any>(this.resourcePath(), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getById(id: any) {
    return this.http
      .get<any>(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  update(id: any, item: any) {
    return this.http
      .put<any>(
        `${this.resourcePath()}/${id}`,
        JSON.stringify(item),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }
}
