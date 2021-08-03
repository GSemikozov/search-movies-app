import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string | undefined;
  @Input() year: string | undefined;
  @Input() type: string | undefined;
  @Input() poster: string | undefined;
  @Input() id: string | undefined;

  constructor() { }
}
