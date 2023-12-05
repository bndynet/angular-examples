import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';

@Component({
    selector: 'chart',
    template: `<mdw-chart [type]="type" [data]="data" [options]="options"></mdw-chart>`,
})
export class MdwChartComponent {
    @Input() type?: string;
    @Input() data: any;
    @Input() options: any;
}
