import { Component } from '@angular/core';

@Component({
    selector: 'mdw-pie',
    template: `<div>
    <mdw-chart type="pie" [data]="data" [options]="options"></mdw-chart>
    <div *ngFor="let item of selectedItems">
        <span style="background-color: {{item.color}}; color: #fff; padding: 0 0.25rem;">{{ item.text }}</span>
    </div>
 </div>
    `,
})
export class PieComponent {
    selectedItems: any[] = [];
    data = {
        'Brunei Darussalam': 739,
        Jordan: 763,
        'Burkina Faso': 604,
        'Cook Islands': 509,
        Monaco: 205,
        Switzerland: 108,
    };
    options = {
        legend: {
            itemSelectable: true,
            onItemClick: (e: any) => {
                this.selectedItems = e.chart.legend.selectedItems;
                console.log(this.selectedItems);
            }
        }
    };

    constructor() {
        document.addEventListener('legendItemClick', (e) => {
            console.log(e);
        })
    }
}
