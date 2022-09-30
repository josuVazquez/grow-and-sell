import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  productTypes = [
    'vegetables',
    'fruits',
    'dairyProducts',
    'legumes',
    'tubers',
    'eggs'
  ];

  uploadForm = new FormBuilder();
  constructor() { }

  ngOnInit() {}

}
