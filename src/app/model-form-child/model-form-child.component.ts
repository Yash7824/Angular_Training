import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-model-form-child',
  templateUrl: './model-form-child.component.html',
  styleUrls: ['./model-form-child.component.css'],
})
export class ModelFormChildComponent {
  @Input() formData: any;
}
