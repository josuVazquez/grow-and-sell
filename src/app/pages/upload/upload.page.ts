import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {
  productTypes = [
    {value: 'vegetables', name: 'ProductTypes.vegetables'},
    {value: 'fruits', name: 'ProductTypes.fruits'},
    {value: 'dairyProducts', name: 'ProductTypes.dairyProducts'},
    {value: 'legumes', name: 'ProductTypes.legumes'},
    {value: 'tubers', name: 'ProductTypes.tubers'},
    {value: 'eggs', name: 'ProductTypes.eggs'},
  ];

  uploadForm = new FormBuilder();
  constructor(private currencyPipe: CurrencyPipe) {}

  ngOnInit() {}

  uploadProduct() {
    console.log('upload');
  }
}
