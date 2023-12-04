import { Component, OnInit } from '@angular/core';
import { Invoker } from './decorator/invoker';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-start></app-start>
      <animations-index></animations-index>
      <mdw-pie></mdw-pie>
    </div>
  `,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.group('===== decorator ======');
    const invoker = new Invoker();
    invoker.start();
    console.groupEnd();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
