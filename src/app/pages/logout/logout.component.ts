import { Component, OnInit } from '@angular/core';
import { NbLogoutComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-logout',
  template: '',
})
export class LogoutComponent extends NbLogoutComponent implements OnInit  {

  ngOnInit() {
   localStorage.removeItem('auth_app_token');
   this.router.navigateByUrl('/auth/login');
  }
}