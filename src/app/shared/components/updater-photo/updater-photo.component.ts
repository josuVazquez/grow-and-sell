import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-updater-photo',
  templateUrl: './updater-photo.component.html',
  styleUrls: ['./updater-photo.component.scss'],
})
export class UpdaterPhotoComponent {
  @Output() pictureEmitter = new EventEmitter();
  pictureArray = new Array(10);

  constructor() {
  }

  changedImg(img, index) {
    if(img.url) {
      this.pushImageToLastPosition(img);
    } else {
      this.pictureArray[index] = null;
      this.reorderArrayWhenDelete();
    }
    this.pictureEmitter.emit(this.pictureArray);
  }

  pushImageToLastPosition(img) {
    for(let index = 0; index < this.pictureArray.length; index++) {
      if(!this.pictureArray[index]) {
        this.pictureArray[index] = img;
        index = this.pictureArray.length;
      }
    }
  }

  reorderArrayWhenDelete() {
    let firstNullFound = false;
    for(let index = 0; index < this.pictureArray.length - 1; index++) {
      if(!this.pictureArray[index] || firstNullFound) {
        firstNullFound = true;
        this.pictureArray[index] = this.pictureArray[index + 1];
      }
    }
    this.pictureArray[this.pictureArray.length - 1] = null;
  }
}
