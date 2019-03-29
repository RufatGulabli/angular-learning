import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  private _url = "http://localhost:3000/enroll";

  constructor(private _http: HttpClient) {}

  register(userData) {
    return this._http
      .post<any>(this._url, userData)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
