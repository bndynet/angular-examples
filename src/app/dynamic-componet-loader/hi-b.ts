import { Component, Input } from '@angular/core';

@Component({
  template: `
    <div class="box-secondary">
      <h1>Hi, this is <b style="color: red;">B</b> component.</h1>
      With data:
      <code>
        {{ data | json }}
      </code>
    </div>
  `
})
export class HiBComponent {
  @Input() data: any;
}
