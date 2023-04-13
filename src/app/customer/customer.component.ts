import { Component } from '@angular/core';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
  customerCategory: string = 'Premium';
  customerName: string = 'Yash';
  customerAge: number = 22;

  toggleBox: boolean = false;

  toggleDisplay() {
    this.toggleBox = !this.toggleBox;
  }

  style1 = {
    color: 'blue',
  };

  styleClass = 'blue';

  changeStyle() {
    if (this.style1.color == 'blue') {
      this.style1.color = 'red';
    } else {
      this.style1.color = 'blue';
    }

    if (this.styleClass == 'blue') {
      this.styleClass = 'red';
    } else {
      this.styleClass = 'blue';
    }
  }

  employee: Employee[] = [
    {
      name: '',
      age: 0,
      email: '',
      skills: '',
    },
  ];

  ShowData() {
    this.employee = [
      {
        name: 'yash',
        age: 22,
        email: 'Yash@gmail.com',
        skills: 'Java, C++, Python, TypeScript',
      },
    ];
  }
}
