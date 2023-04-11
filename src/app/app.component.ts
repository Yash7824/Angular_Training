import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';

  constructor(private router: Router){}
  classValue = "demo"

  changeClass(){
    // if(this.demo == "demo"){
    //   this.demo = "example"
    // } else{
    //   this.demo = "demo"
    // }

    this.classValue = "demo"?"example":"demo";
  }

  navArray = [
    {value: '', viewValue: "Home", revert:''},
    {value: "crypto", viewValue: "Crypto", revert:'revert'},
    {value: "user", viewValue: "Users", revert:'revert'},
    {value: "project", viewValue: "Repos", revert:'revert'},
    {value: "customer", viewValue: "Customer", revert:'revert'},
    {value: "employee", viewValue: "Employees", revert:'revert'},
    {value: "calculator", viewValue: "Calculator", revert:'revert'},
    {value: "template", viewValue: "Template Forms", revert:'revert'},
    {value: "reactive", viewValue: "Reactive Forms", revert:'revert'},
    {value: "structure", viewValue: "Structure", revert:'revert'},
  ]

  isDisplay: boolean = false;
  goBackHome(){
    this.router.navigateByUrl('/');
  }
}
