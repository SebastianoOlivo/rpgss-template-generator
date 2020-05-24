import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthenticationService } from '@api/authentication.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl:'login.component.html',
    styleUrls:['login.component.scss']
})
export class LoginComponent {
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    loginForm = this.fb.group({
        email:['',  [Validators.required, Validators.email]],
        password:['',  Validators.required]
    })

    constructor(private fb: FormBuilder, private authentication: AuthenticationService, private router:Router){}

    onSubmit(){
        if(this.loginForm.valid){
           this.authentication.login(this.loginForm.value.email, this.loginForm.value.password)
           .pipe(first())
           .subscribe(
               token => this.router.navigate(['admin']),
               error => console.log('error', error)
               );
        }
    }
}