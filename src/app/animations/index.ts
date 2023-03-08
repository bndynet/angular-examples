import { Component } from '@angular/core';

@Component({
  selector: 'animations-index',
  template: `
  <h1>Animations</h1>
  <animations-timer></animations-timer>
  <animations-timer [style]="{fontSize: '1.5rem'}"></animations-timer>
  <animations-timer [style]="{fontSize: '2rem'}"></animations-timer>
  `,
})
export class AnimationsIndexComponent {}
