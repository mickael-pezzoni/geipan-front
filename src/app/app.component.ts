import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GeipanClient';

  constructor(private router: Router) {
    console.log(router.url);
    console.log(environment.API_URL);
  }
}
