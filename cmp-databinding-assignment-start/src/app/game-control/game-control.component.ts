import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timeCnt: number = 0;
  timer: any;
  @Output() intervalFired = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonStart() {
    this.timer = setInterval(() => {
      this.timeCnt+=1;
      this.intervalFired.emit(this.timeCnt);
    }, 1000);
  }

  onButtonStop() {
    clearInterval(this.timer);
  }

}
