import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  pass: any;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  login() {
    if (this.user === 'abc' && this.pass === 'abc')
      this.router.navigateByUrl('dashboard');
      
  } 

}
export class Ilogin {

}
