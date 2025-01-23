import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hellozzzimo {{value}}</div>`,
})
export class AppComponent {
  value = 'World';
}
