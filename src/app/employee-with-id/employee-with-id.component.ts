import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDetailsService } from '../employee-details.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-with-id',
  templateUrl: './employee-with-id.component.html',
  styleUrls: ['./employee-with-id.component.css'],
})
export class EmployeeWithIdComponent {
  EmployeeId: number = 0;
  employee: Employee = {
    employeeId: 0,
    employeeName: '',
    employeeAge: 0,
    employeeEmailId: '',
    employeeSkills: [],
  };

  employeeID = 101;

  isReady: boolean = false;

  toggleDisplay: boolean = true;

  constructor(
    private activeRoute: ActivatedRoute,
    private srv: EmployeeDetailsService
  ) {}
  runCode() {
    this.toggleDisplay = false;
    let queryData = this.activeRoute.paramMap.subscribe((params) => {
      let value = params.get('eid');

      if (value != null) {
        // this.EmployeeId = (value as unknown as number)
        this.EmployeeId = Number(value);
      }
    });

    this.employee = this.srv.fetchEmployeebyId(this.EmployeeId);

    this.isReady = true;
  }
}
