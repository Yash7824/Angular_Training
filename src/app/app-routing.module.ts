import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { LandingComponent } from './landing/landing.component';
import { CryptoSinglePriceComponent } from './crypto-single-price/crypto-single-price.component';
import { GithubUserComponent } from './github-user/github-user.component';
import { GithubRepoComponent } from './github-repo/github-repo.component';
import { ErrorComponent } from './error/error.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SalaryComponent } from './salary/salary.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { EmployeeWithIdComponent } from './employee-with-id/employee-with-id.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { StructuralDirectivesDemoComponent } from './structural-directives-demo/structural-directives-demo.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'crypto', component: CryptoSinglePriceComponent },
  { path: 'user', component: GithubUserComponent },
  { path: 'project', component: GithubRepoComponent },
  { path: 'customer', component: CustomerComponent },
  {
    path: 'employee',
    children: [
      { path: '', component: EmployeeComponent },
      { path: ':eid', component: EmployeeWithIdComponent },
      { path: 'salary', component: SalaryComponent },
      { path: 'update', component: UpdateDataComponent },
    ],
  },

  { path: 'calculator', component: CalculatorComponent },
  { path: 'template', component: TemplateDrivenComponent },
  { path: 'reactive', component: ModelDrivenComponent },
  { path: 'structure', component: StructuralDirectivesDemoComponent },
  { path: 'pipes', component: PipesDemoComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
