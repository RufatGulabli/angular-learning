import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepartmentListComponent } from "./department-list/department-list.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { ProductslistComponent } from "./productslist/productslist.component";
import { DepartmentDetailComponent } from "./department-detail/department-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "/employees", pathMatch: "full" },
  { path: "departments", component: DepartmentListComponent },
  { path: "departments/:id", component: DepartmentDetailComponent },
  { path: "employees", component: EmployeeListComponent },
  { path: "products", component: ProductslistComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const RoutingsComponents = [
  DepartmentListComponent,
  EmployeeListComponent,
  DepartmentDetailComponent,
  ProductslistComponent,
  PageNotFoundComponent
];
