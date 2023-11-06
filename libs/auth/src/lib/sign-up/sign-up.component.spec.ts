import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have 3 controls userEmail,userPassword,userPassword ', () => {
    expect(component.signupForm.controls).toContain('userEmail');
    expect(component.signupForm.controls).toContain('userPassword');
    expect(component.signupForm.controls).toContain('userPassword');
  });
});
