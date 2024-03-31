import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignDropdownComponent } from './sign-dropdown.component';

describe('SignDropdownComponent', () => {
  let component: SignDropdownComponent;
  let fixture: ComponentFixture<SignDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
