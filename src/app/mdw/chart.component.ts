import { Component, Input } from '@angular/core';

@Component({
    selector: 'chart',
    template: `<mdw-chart style="width: 300px;" [type]="type" [data]="data" [options]="options"></mdw-chart>`,
})
export class MdwChartComponent {
    @Input() type?: string;
    @Input() data: any;
    @Input() options: any;
}
