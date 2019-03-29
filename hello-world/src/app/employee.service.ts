import { Injectable, ErrorHandler } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { IEmployee } from "./employee";
// import { ErrorObservable } from "rxjs/observable/ErrorObservable";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  private _url: string = "/assets/data/employees1.json";

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    return this.http
      .get<IEmployee[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      return throwError(
        `Server Side Error: ${error.status} ${error.statusText}`
      );
    } else {
      return throwError(`Client Side Error: ${error}`);
    }
  }
}
