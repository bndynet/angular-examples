import { Component } from '@angular/core';

@Component({
  selector: 'animations-index',
  template: `
  <h1 class="text-4xl my-4">Digital Clock - Minutes</h1>
  <animations-timer></animations-timer>
  <animations-timer [style]="{fontSize: '1.5rem'}"></animations-timer>
  <animations-timer [style]="{fontSize: '2rem'}"></animations-timer>
  <animations-timer [style]="{fontSize: '5rem'}"></animations-timer>
  `,
})
export class AnimationsIndexComponent {}
