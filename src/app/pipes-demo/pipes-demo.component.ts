import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {

  dateTimeObj! : Date;

  amount: number = 54.778968

  data = "UsD-ETc-APP"

  pctValue: number = 0.26

  ngOnInit(){
    this.dateTimeObj = new Date();
  }
}
