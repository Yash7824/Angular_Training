import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeWithIdComponent } from './employee-with-id.component';

describe('EmployeeWithIdComponent', () => {
  let component: EmployeeWithIdComponent;
  let fixture: ComponentFixture<EmployeeWithIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeWithIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeWithIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
