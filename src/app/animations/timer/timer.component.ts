import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'animations-timer',
  template: `<div>
    <span class="n">
      <span class="realnum">{{min1}}</span>
      <animations-num [data]="min1"></animations-num>
    </span>
    <span class="n">
      <span class="realnum">{{min2}}</span>
      <animations-num [data]="min2"></animations-num>
    </span>
    <span class="n">:</span>
    <span class="n">
      <span class="realnum">{{sec1}}</span>
      <animations-num [data]="sec1"></animations-num>
    </span>
  <span class="n">
    <span class="realnum">{{sec2}}</span>
    <animations-num [data]="sec2"></animations-num>
  </span>
</div>
    `,
  styleUrls: ['./timer.component.scss'],
})
export class AnimationsTimerComponent implements OnInit {
  public now?: Date;
  public min1 = 0;
  public min2 = 0;
  public sec1 = 0;
  public sec2 = 0;

  public ngOnInit(): void {
    setInterval(() => {
      this.now = new Date();
      this.min1 = Math.floor(this.now.getMinutes() / 10);
      this.min2 = this.now.getMinutes() % 10;
      this.sec1 = Math.floor(this.now.getSeconds() / 10);
      this.sec2 = this.now.getSeconds() % 10;
    }, 1000);
  }
}
