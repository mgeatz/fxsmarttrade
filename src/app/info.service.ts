import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private currencySource = new BehaviorSubject<string>('AUDJPY');
  currency = this.currencySource.asObservable();

  constructor() { }

  changeCurrency(currency: string) {
    console.log('InfoService setCurrency()');
    this.currencySource.next(currency);
  }
}
