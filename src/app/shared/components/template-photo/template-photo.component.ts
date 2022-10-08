import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-template-photo',
  templateUrl: './template-photo.component.html',
  styleUrls: ['./template-photo.component.scss'],
})
export class TemplatePhotoComponent implements OnInit {
  img: any;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  showPreview(event) {
    if (event.target.files.length > 0) {
      this.img = this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(event.target.files[0])
      );
    }
  }
}
