import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";
import { Observable } from "rxjs";
import { IEmployee } from "../employee";

@Component({
  selector: "employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  private employees: IEmployee[];
  private errorMessage = null;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      response => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => (this.errorMessage = error)
    );
  }
}
