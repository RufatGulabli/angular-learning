import { User } from "./user";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class EnrollmentService {
  private _url = "http://localhost:3000/enroll";
  constructor(private _http: HttpClient) {}

  enroll(user: User): Observable<User> {
    console.log("User:", user);
    return this._http
      .post<User>(this._url, user)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
