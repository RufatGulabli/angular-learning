import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

@Component({
  selector: "app-department-detail",
  templateUrl: "./department-detail.component.html",
  styleUrls: ["./department-detail.component.css"]
})
export class DepartmentDetailComponent implements OnInit {
  private departmentId: number;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get("id"));
    // this.departmentId = id;
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.departmentId = parseInt(params.get("id"));
    });
  }

  goPrevious() {
    let prevId = this.departmentId === 1 ? 1 : this.departmentId - 1;
    this.router.navigate(["/departments", prevId]);
  }

  goNext() {
    let nextId = this.departmentId === 5 ? 5 : this.departmentId + 1;
    this.router.navigate(["/departments", nextId]);
  }

  goBack() {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(["/departments", { id: selectedId }]);
  }
}
