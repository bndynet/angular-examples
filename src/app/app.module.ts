import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { DynamicComponent } from './dynamic/index.component';
import { CompHostDirective } from './dynamic/comp-host.directive';
import { HiAComponent } from './dynamic/hi-a';
import { HiBComponent } from './dynamic/hi-b';


import { AnimationsNumComponent } from './animations/timer/number.component';
import { AnimationsTimerComponent } from './animations/timer/timer.component';
import { AnimationsIndexComponent } from './animations';

import '@momentum-design/widgets';
//import { MdwIndexComponent, MdwChartComponent } from './mdw';
import { AppRoutingModule } from './app-routing.module';
import { MdwChartComponent, MdwComponent } from './mdw';

@NgModule({
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  declarations: [
    AppComponent,
    
    DynamicComponent,
    HiAComponent, // important, otherwise cannot use functions(such as json pipe) of CommonModule in this component
    HiBComponent,
    CompHostDirective,

    AnimationsNumComponent,
    AnimationsTimerComponent,
    AnimationsIndexComponent,

    MdwComponent,
    MdwChartComponent,
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
