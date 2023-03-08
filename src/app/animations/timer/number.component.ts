import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'animations-num',
  template: `<div class="root" [@changeState]="state">
    <span>0</span>
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
    <span>6</span>
    <span>7</span>
    <span>8</span>
    <span>9</span>
  </div>
    `,
  animations: [
    trigger('changeState', [
      state('0', style({ transform: 'translate(0%, -0%)' })),
      state('1', style({ transform: 'translate(0%, -10%)' })),
      state('2', style({ transform: 'translate(0%, -20%)' })),
      state('3', style({ transform: 'translate(0%, -30%)' })),
      state('4', style({ transform: 'translate(0%, -40%)' })),
      state('5', style({ transform: 'translate(0%, -50%)' })),
      state('6', style({ transform: 'translate(0%, -60%)' })),
      state('7', style({ transform: 'translate(0%, -70%)' })),
      state('8', style({ transform: 'translate(0%, -80%)' })),
      state('9', style({ transform: 'translate(0%, -90%)' })),
      transition('* => *', [animate('0.5s')]),
    ]),
  ],
  styles: [
    `.root {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 0;
    top: 0;
  
    span {
      display: block;
    }
  }`,
  ],
})
export class AnimationsNumComponent {
  state: string = '0';

  @Input() set data(d: number) {
    this.state = d.toString();
  }
}
