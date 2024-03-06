import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { faker } from '@faker-js/faker';
import '@google-web-components/google-chart';

@Component({
  selector: 'chart',
  template: `
    <button
      class="text-white text-sm bg-sky-500 hover:bg-sky-700 py-1 px-2 rounded"
      (click)="resetData()"
    >
      Reset Data
    </button>
    <button
      class="text-white text-sm bg-sky-500 hover:bg-sky-700 py-1 px-2 ml-2 rounded"
      (click)="addItem()"
    >
      Add Item
    </button>
    <button
      class="text-white text-sm bg-sky-500 hover:bg-sky-700 py-1 px-2 ml-2 rounded"
      (click)="pieOrDonut()"
    >
      {{ this.type === 'pie' ? 'Donut' : 'Pie' }}
    </button>
    <div class="columns-2 mb-2">
      <div>
        <mdw-chart
          style="width: 300px;"
          [type]="'pie'"
          [data]="data"
          [options]="defaultOptions"
        ></mdw-chart>
      </div>
      <div>
        <mdw-chart
          style="width: 300px;"
          [type]="type"
          [data]="data"
          [options]="options"
          [states]="states"
        ></mdw-chart>
        <div class="flex flew-wrap">
          <span
            class="flex flex-row items-center shrink-0 rounded p-1 ml-2 text-xs"
            [style.background-color]="item.color"
            style="color: #fff;"
            *ngFor="let item of selectedItems"
          >
            <span class="ml-1">
              {{ item.text }}
            </span>
            <span
              (click)="removeItem(item)"
              style="cursor: pointer;"
              class="rounded-full hover:bg-white hover:text-black flex justify-center w-6 h-6 ml-1"
            >
              <span class="material-symbols-outlined text-base">delete</span>
            </span>
          </span>
        </div>
      </div>
    </div>
    <hr />
    <h2 class="text-3xl my-4">Google Charts</h2>
    <div class="columns-2 mb-2">
      <div>
        <google-chart
          type="pie"
          [cols]="googleData.cols"
          [rows]="googleData.rows"
        ></google-chart>
      </div>
      <div></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdwChartComponent {
  selectedItems: any[] = [];
  states?: { selectedLegendItems: any[] };
  type = 'donut';
  data: any = {
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
    },
  };
  options: any = {
    innerRadius: '70%',
    centerLabels: [
      {},
      {
        text: 'Total',
        font: {
          size: 16,
        },
      },
    ],
    legend: {
      selectable: true,
      onItemClick: (e: any) => {
        this.selectedItems = [...e.context.chart.legend.selectedItems];
        this.changeRef.detectChanges();
      },
    },
  };

  googleData = {
    cols: [
      { label: 'Country', type: 'string' },
      { label: 'Visits', type: 'number' },
    ],
    rows: [
      ['Brunei Darussalam', 739],
      ['Jordan', 763],
      ['Burkina Faso', 604],
      ['Cook Islands', 509],
      ['Monaco', 205],
      ['Switzerland', 108],
    ],
  };

  others = 0;

  constructor(private changeRef: ChangeDetectorRef) {
    this.data = this.generateData(5);
  }

  public addItem(): void {
    this.others++;
    const newItem = this.generateItem();
    const newData: any = {};
    newData[newItem.country] = newItem.visits;
    this.googleData.rows.push([newItem.country, newItem.visits]);
    this.data = { ...this.data, ...newData };
    console.log(this.data);
  }

  public removeItem(item: any): void {
    this.selectedItems.splice(
      this.selectedItems.findIndex((i) => i.text == item.text),
      1
    );
    this.states = {
      selectedLegendItems: this.selectedItems,
    };
    this.changeRef.detectChanges();
    console.log(`🚀 ~ file: chart.component.ts:166 ~ MdwChartComponent ~ removeItem ~ states:`, this.states)
  }

  public pieOrDonut(): void {
    this.type = this.type === 'pie' ? 'donut' : 'pie';
  }

  public resetData(): void {
    this.data = this.generateData(5);
    (this.options.legend as any).selectedItems = [];
  }

  private generateData(count: number): { country: string; visits: number }[] {
    const result: any = {};
    for (let i = 0; i < count; i++) {
      const item = this.generateItem();
      result[item.country] = item.visits;
    }

    return result;
  }

  private generateItem(): { country: string; visits: number } {
    return {
      country: faker.location.country(),
      visits: faker.number.int({ min: 1, max: 10000 }),
    };
  }
}
