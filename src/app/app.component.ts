import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {InfoService} from './info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'fxsmarttrade';

  selectedPage = 'home';

  currentTime = moment();

  theme: boolean;

  constructor(private info: InfoService) { }

  ngOnInit() {

    this.info.theme.subscribe(theme => {
      this.theme = theme;
    });

  }

  pageUpdated($event) {
    this.selectedPage = $event;
  }

}
