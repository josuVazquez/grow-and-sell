import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {
  productTypes = [
    'vegetables',
    'fruits',
    'dairyProducts',
    'legumes',
    'tubers',
    'eggs',
  ];

  uploadForm = new FormBuilder();
  constructor() {}

  ngOnInit() {}
}
