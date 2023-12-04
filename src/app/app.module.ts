import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

// dynamic-componet-loader
import { StartComponent } from './dynamic-componet-loader/start.component';
import { CompHostDirective } from './dynamic-componet-loader/comp-host.directive';
import { HiAComponent } from './dynamic-componet-loader/hi-a';
import { HiBComponent } from './dynamic-componet-loader/hi-b';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationsNumComponent } from './animations/timer/number.component';
import { AnimationsTimerComponent } from './animations/timer/timer.component';
import { AnimationsIndexComponent } from './animations';

import '@momentum-design/widgets';
import { PieComponent } from './mdw';

@NgModule({
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
  providers: [],
  declarations: [
    AppComponent,
    StartComponent,
    // dynamic-componet-loader
    HiAComponent, // important, otherwise cannot use functions(such as json pipe) of CommonModule in this component
    HiBComponent,
    CompHostDirective,

    AnimationsNumComponent,
    AnimationsTimerComponent,
    AnimationsIndexComponent,

    PieComponent,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor() {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
