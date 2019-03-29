import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { User } from "./user";
import { EnrollmentService } from "./enrollment.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private topics = ["Angular", "React", "Vue"];
  private user = new User();
  private errorMessage: string;
  private submitted: boolean = false;

  constructor(private service: EnrollmentService) {}

  onSubmit() {
    this.submitted = true;
    this.service
      .enroll(this.user)
      .subscribe(
        data => console.log("Data: ", data),
        (error: HttpErrorResponse) => (this.errorMessage = error.statusText)
      );
  }
}
