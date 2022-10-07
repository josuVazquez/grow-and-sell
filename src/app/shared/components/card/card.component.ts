import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() img: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() description: string;

  constructor() {}

  ngOnInit() {}

  // TODO: pipe translate
}
