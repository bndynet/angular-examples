import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'mdw',
    styleUrls: ['./index.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    template: `<div>
    <h1 class="text-4xl my-4">Charts</h1>
    <chart></chart>

    </div>
    `,
})
export class MdwComponent {
}
