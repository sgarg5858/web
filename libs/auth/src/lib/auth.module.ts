import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  imports: [CommonModule,ReactiveFormsModule,MatCardModule,MatButtonModule,MatFormFieldModule,MatInputModule],
  declarations:[LoginComponent,SignUpComponent],
  exports:[LoginComponent,SignUpComponent]
})
export class AuthModule {}
