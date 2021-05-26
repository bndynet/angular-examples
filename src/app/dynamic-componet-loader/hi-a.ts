import { Component, Input, OnDestroy } from '@angular/core';

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
export class HiAComponent implements OnDestroy {
  @Input() data: any;

  ngOnDestroy(): void {
    console.debug('destroy component A');
  }
}
