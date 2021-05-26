import { Component, Input } from '@angular/core';

@Component({
  template: `
    <div class="box-primary">
      <h1>Hi, this is <b>A</b> component.</h1>
      With data:
      <code>
        {{ data | json }}
      </code>
    </div>
  `
})
export class HiAComponent {
  @Input() data: any;
}
