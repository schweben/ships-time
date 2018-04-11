import { Component, OnInit } from '@angular/core';
import { TimeService } from './service/time.service';

@Component({
  selector: 'st-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public title = 'Ship\'s Time';
  public time: string;
  public watches: any;

  constructor(private timeService: TimeService) {
  }

  public ngOnInit(): void {
    this.watches = this.timeService.getWatches();
    this.time = this.timeService.getShipsTime();
    console.log(this.watches);
  }
}
