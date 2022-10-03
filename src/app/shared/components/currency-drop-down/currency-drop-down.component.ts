import { CurrencyPipe, getLocaleCurrencyCode } from '@angular/common';
import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-currency-drop-down',
  templateUrl: './currency-drop-down.component.html',
  styleUrls: ['./currency-drop-down.component.scss'],
})
export class CurrencyDropDownComponent implements OnInit{
  selectedCurrency = 'USD';
  currencyList: Array<any> = [
    {code:'EUR', text:'€'},
    {code:'GBP', text:'£'},
    {code:'USD', text:'$'},
  ];

  constructor(public currencyPipe: CurrencyPipe, @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit(): void {
    const localMoney = getLocaleCurrencyCode(this.locale);
    this.selectedCurrency = localMoney;
    console.log(localMoney);
    // throw new Error('Method not implemented.');
  }

  updateCurrecy() {
    console.log(this.selectedCurrency);
  }

}
