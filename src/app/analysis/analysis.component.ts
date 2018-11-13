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

  tradingTimeFrame = 30;

  successProbability = 60;

  failureProbability = 60;

  weights = [5, 7, 9];

  technicalIndicators = [
    {
      title: 'BB% Crossing HMA',
      inputs: 'BB% = Length 20, Mult 2; HMA = Length 25',
      details: 'A simple crossover strategy to determine directional changes.',
      flagStatement: 'Did the crossover occurred during last candle?',
      weight: 5
    },
    {
      title: 'BB %B Standard Deviation',
      inputs: 'Length = 225, Mult = 2',
      details: `The Upper and Lower Bands are typically 2 standard deviations
                above and below the SMA.`,
      flagStatement: 'Is the SMA crossing back into 0-1 SD territory?',
      weight: 7
    },
    {
      title: 'CCI',
      inputs: 'Length 14',
      details: `Commodity Channel Index is Upper and Lower Bands 2 
                standard deviations above and below the SMA.`,
      flagStatement: 'Is the SMA outside of an Upper or Lower Band?',
      weight: 9
    },
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
