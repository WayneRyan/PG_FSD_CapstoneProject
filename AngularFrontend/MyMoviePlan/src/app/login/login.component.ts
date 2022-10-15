import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticateService} from "../services/authenticate.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService:AuthenticateService) { }

  ngOnInit(): void {
  }

  submit(f: any) {
    console.log(f.value['password']);
    if (this.loginService.authenticate(f.value['login'], f.value['password'])){
      this.router.navigate(['/search']).then(()=>{});
    } else {
      this.router.navigate(['/home']).then(()=>{});
    }
  }
}
