import { Component, OnInit } from '@angular/core';
import { Patient } from '../../interfaces/patient';
import { MatSnackBar } from '@angular/material/snack-bar';
//import {LogInService} from "../../services/log-in.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { map, Observable, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
//import {SourcesService} from "../../services/sources.service";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-log-in-card',
  templateUrl: './log-in-card.component.html',
  styleUrls: ['./log-in-card.component.css'],
  providers: [MatSnackBar],
})
export class LogInCardComponent implements OnInit {
  //CONNECTING TO FAKEAPI
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  rpassword: string = '';
  patient: Patient = {
    id: 0,
    name: '',
    email: '',
    age: '',
    password: '',
    lastName: '',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/2048px-Emblem-person-blue.svg.png',
  };
  patients: Array<any> = [];
  loginInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
  });
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private authService: AuthService
  ) {}

  get lopassword() {
    return this.loginInForm.controls['password'];
  }

  get loemail() {
    return this.loginInForm.controls['email'];
  }

  get password() {
    return this.signUpForm.controls['password'];
  }

  get email() {
    return this.signUpForm.controls['email'];
  }

  get name() {
    return this.signUpForm.controls['name'];
  }

  get lastName() {
    return this.signUpForm.controls['lastName'];
  }

  get age() {
    return this.signUpForm.controls['age'];
  }
  signUp() {
    this.authService
      .register(this.signUpForm.getRawValue() as any)
      .subscribe((res: any) => {
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigate(['/dashboard']);
      });
  }

  login() {
    if (this.loemail.value && this.lopassword.value) {
      const loginData = {
        email: this.loemail.value,
        password: this.lopassword.value,
      };
      this.authService.login(loginData).subscribe((res: any) => {
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigate(['/dashboard']);
      });
    }
  }

  forgot_password() {
    this.router.navigate(['/change-password']);
  }

  ngOnInit() {
    /*this.newsSource.getSources('patients').subscribe((data: any): void => {
      this.patients = data;
      console.log("Sources: ", this.patients);
    });
    */
  }
}
