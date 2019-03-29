import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-department-list",
  templateUrl: "./department-list.component.html",
  styleUrls: ["./department-list.component.css"]
})
export class DepartmentListComponent implements OnInit {
  private selectedId;
  private departments = [
    { id: 1, name: "Angular Team" },
    { id: 2, name: "Java Team" },
    { id: 3, name: "C# Team" },
    { id: 4, name: "React Team" },
    { id: 5, name: "SQL Team" }
  ];

  constructor(private routes: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = params.get("id");
    });
  }

  onClick(deps) {
    this.routes.navigate(["/departments", deps.id]);
  }
}
