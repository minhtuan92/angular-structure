import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
} from '@angular/core';

import { CardComponent } from '../../../ui/components/card/card.component';

import { DocumentManagerService } from './document-manager.service';
import { DocumentManagerCtx } from './document-manager.types';

@Component({
  selector: 'my-app-1-document-manager',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './document-manager.component.html',
  styleUrl: './document-manager.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentManagerComponent {
  private documentManagerService = inject(DocumentManagerService);

  ctx = input<DocumentManagerCtx>('default');
  documents = this.documentManagerService.documents;

  ref = effect(
    () => {
      this.documentManagerService.loadDocumentsForContext(this.ctx());
    },
    { allowSignalWrites: true },
  );
}
