import { Component, OnInit } from '@angular/core';
import { TimeService } from './service/time.service';

@Component({
  selector: 'st-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public title = 'Ship\'s Time';
  public watches: any;
  public time: Date;
  public shiptime: string;

  constructor(private timeService: TimeService) {
  }

  public ngOnInit(): void {
    this.setTime();
    this.watches = this.timeService.getWatches();
  }

  private setTime(): void {
    setInterval(() => {
      this.time = new Date();
      this.shiptime = this.timeService.getShipsTime(this.time);
    }, 1000);
  }
}
