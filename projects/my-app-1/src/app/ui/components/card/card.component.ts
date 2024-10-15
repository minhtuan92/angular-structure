import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MyLib1Component } from 'my-lib-1';

@Component({
  selector: 'my-app-1-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MyLib1Component],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  isCloseable = input(false);
  @Output() closed = new EventEmitter<void>();
}
