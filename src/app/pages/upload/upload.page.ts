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
    {value: 'vegetables', name: 'productTypes.vegetables'},
    {value: 'fruits', name: 'productTypes.fruits'},
    {value: 'dairyProducts', name: 'productTypes.dairyProducts'},
    {value: 'legumes', name: 'productTypes.legumes'},
    {value: 'tubers', name: 'productTypes.tubers'},
    {value: 'eggs', name: 'productTypes.eggs'},
  ];

  productForm = new FormGroup({
    category: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    currency: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });
  pictureArray: Array<any> = [];
  constructor(private currencyPipe: CurrencyPipe, private productService: ProductService) {}

  ngOnInit() {}

  uploadProduct() {
    const product = this.productForm.getRawValue();
    console.log(this.pictureArray);
    this.productService.createProduct(new Product(product), this.pictureArray.map(f => f.file));
    console.log('upload');
  }

  pictureChange(picture) {
    this.pictureArray = picture;
  }
}
