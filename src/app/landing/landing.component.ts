import { Component } from '@angular/core';
import { GoBackService } from '../go-back.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  constructor(private gb: GoBackService, private route: Router) {}

  navArray = [
    { value: 'crypto', viewValue: 'Crypto', revert: 'revert' },
    { value: 'user', viewValue: 'Users', revert: 'revert' },
    { value: 'project', viewValue: 'Repos', revert: 'revert' },
    { value: 'customer', viewValue: 'Customer', revert: 'revert' },
    { value: 'employee', viewValue: 'Employees', revert: 'revert' },

    { value: 'calculator', viewValue: 'Calculator', revert: 'revert' },
    { value: 'template', viewValue: 'Template Forms', revert: 'revert' },
    { value: 'reactive', viewValue: 'Reactive Forms', revert: 'revert' },
    { value: 'structure', viewValue: 'Structure', revert: 'revert' },
    { value: 'pipes', viewValue: 'Demo of Pipes', revert: 'revert' },
  ];
}
