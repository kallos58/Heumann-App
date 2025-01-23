import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule, APP_BASE_HREF } from "@angular/common";

import { LayoutModule } from "@progress/kendo-angular-layout";
import { IndicatorsModule } from "@progress/kendo-angular-indicators";
import { IconsModule, SVGIcon } from "@progress/kendo-angular-icons";
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { ButtonsModule } from "@progress/kendo-angular-buttons";

export const bottomNavigationRoutes = [
  {
    path: "",
    
    selected: true,
  },
  {
    path: "appbar",
    
    selected: false,
  },
  {
    path: "actionsheet",
    
    selected: false,
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(bottomNavigationRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    LayoutModule,
    IndicatorsModule,
    IconsModule,
    NavigationModule,
    ButtonsModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule {}

