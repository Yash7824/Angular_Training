import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { BitcoinModel } from './models/BitcoinModel';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  employeeRecord: Employee[] = []


  constructor(private http: HttpClient) {}
  
  
  public getData() : Employee[]{
    return this.employeeRecord;
  }


  public fetchDatafromAPI(): Observable<BitcoinModel>{
    return this.http.get<BitcoinModel>(`https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR`)
  }

  employees: Employee[] = []
  employeesList: Employee[] =[];

  result : Employee={
      
    employeeId: -1,
    employeeName: "",
    employeeAge:0,
    employeeEmailId: "",
    employeeSkills: [] 
  }

  public fetchEmployeebyId(eid: number): Employee{
    let url = `assets/data.json`;
    

    this.http.get<Employee[]>(url).subscribe({
      next: (employeeArray: Employee[]) => {
        for(let emp of employeeArray){
          this.employees.push(emp)
          this.employeesList.push(emp)
        } 
      },
      complete: ()=> {
        console.log("Completed");
      }
    })

    
    let ans = this.employees.filter( (emp: Employee) => emp.employeeId == eid).at(0)
        
    if(typeof(ans)!=undefined){
      this.result = ans as Employee;
    }
    return this.result;

  

    
  }


}
