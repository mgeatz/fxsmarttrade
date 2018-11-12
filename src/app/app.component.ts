import {Component} from '@angular/core';
import {InfoService} from './info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'fxsmarttrade';

  selectedPage = 'home';

  pageUpdated($event) {
    this.selectedPage = $event;
  }

}
