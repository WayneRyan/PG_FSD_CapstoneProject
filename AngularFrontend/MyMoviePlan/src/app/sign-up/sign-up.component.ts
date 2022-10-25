import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticateService} from "../services/authenticate.service";
import {Account} from "../beans/Account";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  errorMessage = '';
  account = new Account();

  constructor(private router: Router, private loginService: AuthenticateService) {
  }

  ngOnInit(): void {
    this.loginService.isCurrentlyLoggedIn.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigate(['/search']).then(() => {
        });
      }
    });
    this.loginService.currentErrorMessage.subscribe(errorMessage => {
      this.errorMessage = errorMessage;
    });
  }

  submit(f : NgForm) {
    this.account.password = f.value.password;
    console.log(this.account);
    this.loginService.create(this.account).subscribe({
      next: response => {
        if (response === 'Account created successfully') {
          this.router.navigate(['/login']).then(() => {
          });
        }else {
          this.errorMessage = response
        }
      },
      error: (error: Error) => console.log(error)
    });
  }
}
