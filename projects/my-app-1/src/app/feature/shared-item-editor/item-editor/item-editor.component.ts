import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from '../../../ui/components/card/card.component';

@Component({
  selector: 'my-app-1-item-editor',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterLink, CardComponent],
  templateUrl: './item-editor.component.html',
  styleUrl: './item-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemEditorComponent {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  name = input<string>();

  handleClose() {
    this.router.navigate(['../..'], { relativeTo: this.activatedRoute });
  }
}
