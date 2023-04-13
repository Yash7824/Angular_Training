import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFormChildComponent } from './model-form-child.component';

describe('ModelFormChildComponent', () => {
  let component: ModelFormChildComponent;
  let fixture: ComponentFixture<ModelFormChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelFormChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelFormChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
