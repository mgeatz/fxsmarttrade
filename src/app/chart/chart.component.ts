import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {InfoService} from '../info.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass']
})
export class ChartComponent implements AfterViewInit {

  @Input() showChart = false;

  @Output() changeChartDetails = new EventEmitter<boolean>();

  @Input() currency;

  constructor() { }

  ngAfterViewInit() {

    setTimeout(() => {
      // TODO: chart not rendering for some reason
      this.showChart = true;
    });

  }

}
