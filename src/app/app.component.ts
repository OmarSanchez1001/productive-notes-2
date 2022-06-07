import { Component } from '@angular/core';
import { LoginRegisterPage } from './login-register/login-register.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  rootPage: any = LoginRegisterPage;
  constructor() {}
}
