import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from "../services/authenticate.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn:boolean = false;

  constructor(private loginService:AuthenticateService) { }

  ngOnInit(): void {
    this.loginService.isCurrentlyLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
  }

}
