import { Component } from '@angular/core';
import { EmployeeDetailsService } from '../employee-details.service';
import { Employee } from '../employee';
import { BitcoinModel } from '../models/BitcoinModel';

@Component({
  selector: 'app-employee-with-service',
  templateUrl: './employee-with-service.component.html',
  styleUrls: ['./employee-with-service.component.css']
})
export class EmployeeWithServiceComponent {

  constructor(private employeeDetailsService: EmployeeDetailsService){}

  EmployeeRecord: Employee[] = []

  bitcoinData!: BitcoinModel;
  ngOnInit(){
    this.EmployeeRecord = this.employeeDetailsService.getData()
    console.log(this.EmployeeRecord);
    
    this.employeeDetailsService.fetchDatafromAPI().subscribe((response: any) => this.bitcoinData = response)
  }

}
