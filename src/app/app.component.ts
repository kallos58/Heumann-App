import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello 15 {{value}}</div>`,
})
export class AppComponent {
  value = 'World';
}
