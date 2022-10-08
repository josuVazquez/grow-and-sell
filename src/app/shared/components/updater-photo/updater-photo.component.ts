import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updater-photo',
  templateUrl: './updater-photo.component.html',
  styleUrls: ['./updater-photo.component.scss'],
})
export class UpdaterPhotoComponent implements OnInit {
  maxItems: 10;
  arrayItems = new Array(10);
  item: {
    img: '';
  };

  constructor() {
    console.log(this.arrayItems);
  }

  ngOnInit() {}

  clickedPhoto(index: number) {
    console.log(index);
  }

  private onSucess() {
    // this.selectedFile.pending = false;
    // this.selectedFile.status = 'ok';
  }

  private onError() {}
}
