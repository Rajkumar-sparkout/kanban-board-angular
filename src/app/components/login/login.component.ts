import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, PopupComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  public message: string = '';
  public messageType: 'success' | 'error' = 'success';

  constructor(
    private route: Router,
    private authService: AuthService,
  ){}

  ngOnInit(): void {
    if(localStorage.getItem('email')){
      this.route.navigate(['dashboard']);
    }
  }

  loginForm = new FormGroup({
    email : new FormControl("", Validators.required),
    password : new FormControl("", Validators.required),
  });

  get loginFormControl() {
    return this.loginForm.controls;
  }

  gotoRegister(){
    this.route.navigate(['register'])
  }

  login(){
    const {email, password} = this.loginForm.value
    this.authService.getUserByEmail(email as string).subscribe(
      response=> {
        if(response.length > 0 && response[0].password === password){
          
          localStorage.setItem('email', email as string);

          this.message = 'Login successfull';
          this.messageType = 'success';
          setTimeout(()=> {
            window.location.href = window.location.href
          }, 1000);
        }else{
          this.message = 'Username or password is wrong';
          this.messageType = 'error';
        }
      },
      error=> {
        console.log(error);
        this.message = 'Login failed';
        this.messageType = 'error';
      }
    )
  }


}
