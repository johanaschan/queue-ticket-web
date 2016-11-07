import {Component} from '@angular/core';
import { AuthService } from './security';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService) {

  }

    hasRole(role: string) {
      return this.authService.hasRole(role);
    }
}
