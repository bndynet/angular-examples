import { Component, Input } from '@angular/core';

@Component({
  template: `
    <div class="box-secondary">
      <div>Hi, this is <b style="color: red;">B</b> component.</div>
      With data:
      <code>
        {{ data | json }}
      </code>
    </div>
  `,
})
export class HiBComponent {
  @Input() data: any;
}
