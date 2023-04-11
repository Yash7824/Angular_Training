import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Gender } from '../gender';


@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent {

  title = 'model-driven-forms-demo';
  isFormReady=false

  //step 1: Creating a new FormGroup (for entire form)
  public userForm = new FormGroup({

      //step 2 : Create a new FormControl for name. Add any validations at the same time
      name : new FormControl('Brandon', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      
      age : new FormControl('0', [Validators.required,Validators.min(0),  Validators.max(150)]),

      gender : new FormControl("MALE", [Validators.required]),

      email : new FormControl(null, Validators.pattern('^[a-z][a-z0-9_]{3,}@[a-z]{2,}\.[a-z]{2,4}')),

      address : new FormGroup({
          street : new FormControl(null,[Validators.minLength(2), Validators.maxLength(10) ]),
          city : new FormControl( null, [Validators.maxLength(15), Validators.minLength(5)]     ),
          postal_code : new FormControl(null, Validators.pattern('^[1-9][0-9]{5}$')  )
      }),

  })

  genders: Gender[] = [
    {value: 'MALE', viewValue: 'MALE'},
    {value: 'FEMALE', viewValue: 'FEMALE'},
    {value: 'OTHER', viewValue: 'OTHER'},
  ]

  onSave(){
    console.log(this.userForm.value);
    this.isFormReady = true
    
  }
}
