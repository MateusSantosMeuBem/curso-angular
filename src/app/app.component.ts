import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css ']
})
export class AppComponent {
  user_name: string = 'Mateus Santos';

  user_data = {
      email: 'test@email.com',
      role: 'boss'
  };

  title = 'curso-angular';
}
