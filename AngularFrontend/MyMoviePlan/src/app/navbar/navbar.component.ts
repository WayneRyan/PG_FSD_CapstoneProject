import {Component, OnInit} from '@angular/core';
import {AuthenticateService} from "../services/authenticate.service";
import {Account} from "../beans/Account";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;
  userInfo: Account = new Account();

  constructor(public loginService: AuthenticateService) {
  }

  ngOnInit(): void {
    this.loginService.isCurrentlyLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
    this.loginService.currentUserInfo.subscribe(userInfo => this.userInfo = userInfo);
  }

}
