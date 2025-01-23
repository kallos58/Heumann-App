import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hellozzz {{value}}</div>`,
})
export class AppComponent {
  value = 'World';
}
