import { Component, Input } from '@angular/core';
import '@google-web-components/google-chart';

@Component({
    selector: 'chart',
    template: `
    <mdw-chart style="width: 300px;" [type]="type" [data]="data" [options]='options'></mdw-chart>
    <span [style.background-color]="item.color" style="color: #fff;" *ngFor="let item of selectedItems">{{item.text}}</span>
    <hr />
    <h2 class="text-3xl my-4">Google Charts</h2>
    <google-chart [data]="googleData"></google-chart>
    `,
})
export class MdwChartComponent {
    selectedItems: any[] = [];
    type = 'donut';
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
    };

    googleData = [["Month", "Days"], ["Jan", 31]];
}

