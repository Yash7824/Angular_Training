import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

    employeeRecord: Employee[] = []
  
    constructor(private activeRoute: ActivatedRoute, private srv: EmployeeDetailsService){}

  ngOnInit(){
    let obj1 = {
      employeeId : 101,
      employeeName: "Yash",
      employeeAge: 22,
      employeeEmailId: "yash@abc.com",
      employeeSkills: ["Programming", "Machine Learning", "AI"]
  
  }
  
  let obj2 = {
      employeeId : 102,
      employeeName: "Sanchit",
      employeeAge: 12,
      employeeEmailId: "sanchit@abc.com",
      employeeSkills: ["Programming", "Flutter", "TP"]
  
  }
  
  let obj3 = {
      employeeId : 103,
      employeeName: "Saud",
      employeeAge: 6,
      employeeEmailId: "saud@abc.com",
      employeeSkills: ["Programming", "Angular", "TP"]
  
  }

  this.employeeRecord.push(obj1)
  this.employeeRecord.push(obj2)
  this.employeeRecord.push(obj3)

  }
}