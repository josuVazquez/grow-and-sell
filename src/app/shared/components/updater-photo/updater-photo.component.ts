import { Component } from '@angular/core';

@Component({
  selector: 'app-updater-photo',
  templateUrl: './updater-photo.component.html',
  styleUrls: ['./updater-photo.component.scss'],
})
export class UpdaterPhotoComponent {
  arrayItems = new Array(10);

  constructor() {
  }

  changedImg(url, index) {
    if(url) {
      this.pushImageToLastPosition(url);
    } else {
      this.arrayItems[index] = null;
      this.reorderArrayWhenDelete();
    }
  }

  pushImageToLastPosition(url) {
    for(let index = 0; index < this.arrayItems.length; index++) {
      if(!this.arrayItems[index]) {
        this.arrayItems[index] = url;
        index = this.arrayItems.length;
      }
    }
  }

  reorderArrayWhenDelete() {
    let firstNullFound = false;
    for(let index = 0; index < this.arrayItems.length - 1; index++) {
      if(!this.arrayItems[index] || firstNullFound) {
        firstNullFound = true;
        this.arrayItems[index] = this.arrayItems[index + 1];
      }
    }
    this.arrayItems[this.arrayItems.length - 1] = null;
  }
}
