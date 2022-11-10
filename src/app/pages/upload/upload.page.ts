import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

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

  productForm = new FormGroup({
    type: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    currency: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  constructor(private currencyPipe: CurrencyPipe, private productService: ProductService) {}

  ngOnInit() {}

  uploadProduct() {
    const product = this.productForm.getRawValue();
    this.productService.createProduct(new Product(product));
    console.log('upload');
  }
}
