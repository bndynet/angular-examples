import { Component } from '@angular/core';

@Component({
    selector: 'mdw',
    template: `<chart type="donut" [data]="data" [options]="{innerRadius: '70%'}"></chart>`,
})
export class MdwComponent {
    data = {
        'Brunei Darussalam': 739,
        Jordan: 763,
        'Burkina Faso': 604,
        'Cook Islands': 509,
        Monaco: 205,
        Switzerland: 108,
    };
}
