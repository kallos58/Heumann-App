import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from "./app.component";
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule {}

