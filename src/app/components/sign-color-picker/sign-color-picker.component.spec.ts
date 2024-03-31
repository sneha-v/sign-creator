import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignColorPickerComponent } from './sign-color-picker.component';

describe('SignColorPickerComponent', () => {
  let component: SignColorPickerComponent;
  let fixture: ComponentFixture<SignColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignColorPickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
