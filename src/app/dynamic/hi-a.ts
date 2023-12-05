import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  template: `
    <div class="box-primary">
      <div>Hi, this is <b>A</b> component.</div>
      With data:
      <code>
        {{ data | json }}
      </code>
    </div>
  `,
})
export class HiAComponent implements OnDestroy {
  @Input() data: any;

  ngOnDestroy(): void {
    console.debug('destroy component A');
  }
}
