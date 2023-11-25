import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, shareReplay } from 'rxjs';
import { Patient } from 'src/app/interfaces/patient';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-doctors-login',
  templateUrl: './doctors-login.component.html',
  styleUrls: ['./doctors-login.component.css'],
})
export class DoctorsLoginComponent {
  //CONNECTING TO FAKEAPI
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  rpassword: string = '';
  loginInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    lastName: new FormControl(''),
    speciality: new FormControl(''),
  });
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.resourceEndpoint = 'doctors';
  }

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

  get speciality() {
    return this.signUpForm.controls['speciality'];
  }
  signUp() {
    const { lastName, age, ...rest } = this.signUpForm.getRawValue() as any;
    const data = {
      ...rest,
      lastname: lastName,
      age: parseInt(age!),
    };
    this.authService.register(data).subscribe((res: any) => {
      localStorage.setItem('user', JSON.stringify(res));
      localStorage.setItem('doctor', 'true');
      localStorage.setItem('patient', 'false');
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
        localStorage.setItem('doctor', 'true');
        localStorage.setItem('patient', 'false');
        this.router.navigate(['/dashboard']);
      });
    }
  }

  forgot_password() {
    this.router.navigate(['/change-password']);
  }
}
