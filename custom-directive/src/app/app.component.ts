import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'custom-directive';
  public message: any =
    'sample demostration of attribute directive using custom directive';
  public color: any = 'blue';
}
