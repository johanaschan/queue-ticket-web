import{ Component }from'@angular/core';
import { AuthService } from '../shared/security';

@Component({
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})
export class MainComponent {


  constructor(private authService: AuthService) {

  }

  hasRole(role: string): boolean {
    return this.authService.hasRole(role);
  }

}
