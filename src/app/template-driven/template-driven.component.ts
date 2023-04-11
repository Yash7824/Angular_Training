import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  title = 'template-forms-demo';

  userName :string=""
  userEmail : string=""
  userStreet : string = ""
  userCity : string = ""
  userZipCode : number = 0
  userMobile : string = ""
  userGender: string = ""

  OnSubmit(value : any){
    console.log(value);    
  }

  ngOnInit(): void {
      
  }
}
