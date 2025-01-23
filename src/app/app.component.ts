import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [KENDO_BUTTONS, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  entries = 0;
  constructor() {
   
  }


  cardClick(i: number) {

  }

  exportToXls() {

  }

  clearFilter() {}
}
