import {Component, OnInit} from '@angular/core';
import {InfoService} from '../info.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.sass']
})
export class AnalysisComponent implements OnInit {

  currency: string;

  dropdown_title: string;

  currencies = [
    'AUDJPY',
    'USDGBP'
  ];

  constructor(private info: InfoService) {
  }

  ngOnInit() {
    this.info.currency.subscribe(currency => {
      this.currency = currency;
      this.dropdown_title = currency;
    });
  }

  setCurrency(currency) {
    this.dropdown_title = currency;
    this.info.changeCurrency(currency);
  }

}
