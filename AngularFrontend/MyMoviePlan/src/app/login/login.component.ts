import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticateService} from "../services/authenticate.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = "";

  constructor(private router: Router, private loginService:AuthenticateService) { }

  ngOnInit(): void {
    this.loginService.isCurrentlyLoggedIn.subscribe(isLoggedIn =>{
      if (isLoggedIn){
        this.router.navigate(['/search']).then(()=>{});
      }
    });
    this.loginService.currentErrorMessage.subscribe(errorMessage =>{
      this.errorMessage = errorMessage;
    });
  }

  submit(f: any) {
    this.loginService.authenticate(f.value['login'], f.value['password']);
  }
}
