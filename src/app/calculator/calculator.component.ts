import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Operation } from '../Operation';
import { Operate } from '../operate';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})


export class CalculatorComponent {

  firstNumber = 0;
  secondNumber = 0;

  result = 0;
  isReady = true;

  operation = '';
  optionText: string = "Addition"
  operationEnum: Operation = Operation.ADDITION;

  mapOptionToEnum(){
    if(this.optionText == "Addition"){
      this.operationEnum = Operation.ADDITION
    }

    if(this.optionText == "Subtraction"){
      this.operationEnum = Operation.SUBTRACTION
    }

    if(this.optionText == "Multiplication"){
      this.operationEnum = Operation.MULTIPLICATION
    }

    if(this.optionText == "Division"){
      this.operationEnum = Operation.DIVISION
    }

    this.menuFunction()
  }

  operationArray: Operate[] = [
    {value: 'Addition', viewValue: 'Addition'},
    {value: 'Subtraction', viewValue: 'Subtraction'},
    {value: 'Multiplication', viewValue: 'Multiplication'},
    {value: 'Division', viewValue: 'Division'},
  ];

  menuFunction(){
    if(this.operationEnum == Operation.ADDITION){
      this.result = this.firstNumber + this.secondNumber
    }

    if(this.operationEnum == Operation.SUBTRACTION){
      this.result = this.firstNumber - this.secondNumber
    }

    if(this.operationEnum == Operation.MULTIPLICATION){
      this.result = this.firstNumber * this.secondNumber
    }

    if(this.operationEnum == Operation.DIVISION){
      this.result = this.firstNumber / this.secondNumber
    }

    
  }

  calculator(operation: string){
    if(operation == '+'){
      this.result = this.firstNumber + this.secondNumber
    }else if(operation == '-'){
      this.result = this.firstNumber - this.secondNumber
    }else if(operation == '*'){
      this.result = this.firstNumber * this.secondNumber
    }else if(operation == '/'){
      this.result = this.firstNumber / this.secondNumber
    }else{
      console.log("Invalid Operation")
    }
  }

  addition() {
    this.result = this.firstNumber + this.secondNumber

  }

  
}
