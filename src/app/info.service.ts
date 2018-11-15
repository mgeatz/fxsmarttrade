import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private currencySource = new BehaviorSubject<string>('AUDJPY');
  currency = this.currencySource.asObservable();

  private currentTheme = new BehaviorSubject<boolean>(false);
  theme = this.currentTheme.asObservable();

  constructor() { }

  changeCurrency(currency: string) {
    console.log('InfoService changeCurrency()');
    this.currencySource.next(currency);
  }

  changeTheme(theme: boolean) {
    console.log('InfoService changeTheme()');
    this.currentTheme.next(theme);
  }

}
