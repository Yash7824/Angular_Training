import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeWithServiceComponent } from './employee-with-service.component';

describe('EmployeeWithServiceComponent', () => {
  let component: EmployeeWithServiceComponent;
  let fixture: ComponentFixture<EmployeeWithServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeWithServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
