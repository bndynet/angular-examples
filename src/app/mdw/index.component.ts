import { Component } from '@angular/core';

@Component({
    selector: 'mdw',
    template: `<div>
    <h1 class="text-4xl my-4">Charts</h1>
    <chart type="donut" [data]="data" [options]="options"></chart>
    <span [style.background-color]="item.color" style="color: #fff;" *ngFor="let item of selectedItems">{{item.text}}</span>
    <hr />
    </div>
    `,
})
export class MdwComponent {
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
        innerRadius: '70%',
        legend: {
            itemSelectable: true,
            onItemClick: (e: any) => {
                console.log(e);
                this.selectedItems = e.chart.legend.selectedItems;
            }
        }
    }
}
