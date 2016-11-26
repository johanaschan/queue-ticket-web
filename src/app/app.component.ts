import {Component} from '@angular/core';
import { AuthService } from './shared/security';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.isLoggedIn()) {
      router.navigate(['main']);
    }else {
      router.navigate(['login']);
    }
  }
}
