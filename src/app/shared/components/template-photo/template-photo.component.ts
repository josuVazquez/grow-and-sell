import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-template-photo',
  templateUrl: './template-photo.component.html',
  styleUrls: ['./template-photo.component.scss'],
})
export class TemplatePhotoComponent implements OnInit {
  // @ViewChild('input') input: ElementRef;
  @Input() img;
  @Input() text;
  @Output() changeImg = new EventEmitter();

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  showPreview(event) {
    if (event.target.files.length > 0) {
      const img = this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(event.target.files[0])
      );
      this.changeImg.emit(img);
    }
  }

  delete() {
    this.changeImg.emit(null);
  }
}
