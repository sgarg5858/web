import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpComponent } from './sign-up.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      schemas:[NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have 3 controls userEmail,userPassword,userPassword in the FormGroup Modal ', () => {
    expect(component.signupForm.controls.email).toBeDefined();
    expect(component.signupForm.controls.password).toBeDefined();
    expect(component.signupForm.controls.confirmPassword).toBeDefined();
  });

  it('should render all 3 controls in UI and the sign up button and the Signup Button ', () => {
    const inputControls = fixture.debugElement.queryAll(By.css('.signup-form__control'));
    const signUpButton = fixture.debugElement.query(By.css('.signup-form__button'));
    expect(inputControls.length).toBe(3);
    expect(signUpButton).toBeTruthy();

  });


});
