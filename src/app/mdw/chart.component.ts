import { Component, Input } from '@angular/core';
import '@google-web-components/google-chart';

@Component({
  selector: 'chart',
  template: `
    <div class="columns-2 mb-2">
      <div>
        <mdw-chart
          style="width: 300px;"
          type="pie"
          [data]="data"
          [options]="defaultOptions"
        ></mdw-chart>
      </div>
      <div>
        <div>
          <mdw-chart
            style="width: 300px;"
            [type]="type"
            [data]="data"
            [options]="options"
          ></mdw-chart>
          <span
            class="rounded px-2 py-1 ml-2 text-xs"
            [style.background-color]="item.color"
            style="color: #fff;"
            *ngFor="let item of selectedItems"
            >{{ item.text }}</span
          >
        </div>
      </div>
    </div>
    <hr />
    <h2 class="text-3xl my-4">Google Charts</h2>
    <google-chart type="pie" [cols]="googleData.cols" [rows]="googleData.rows"></google-chart>
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
  defaultOptions = {
    innerRadius: '70%',
    centerLabels: [
      {},
      {
        text: 'Total',
      },
    ],
    legend: {
      markerStyle: 'circle',
    }
  };
  options = {
    innerRadius: '70%',
    centerLabels: [
      {},
      {
        text: 'Total',
        font: {
          size: 16,
        }
      },
    ],
    legend: {
      itemSelectable: true, // TODO: remove as it has been removed in next version
      selectable: true,
      onItemClick: (e: any) => {
        console.log(e);
        this.selectedItems = e.context.chart.legend.selectedItems;
      },
    },
  };

  googleData = {
    cols: [{"label": "Country", "type": "string"},{"label": "Visits", "type": "number"}],
    rows: [ ["Brunei Darussalam", 739],["Jordan", 763],["Burkina Faso", 604],["Cook Islands", 509],["Monaco", 205],["Switzerland", 108] ],
  }
}
