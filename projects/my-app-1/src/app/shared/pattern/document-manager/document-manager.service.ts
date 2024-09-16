import { Injectable, signal } from '@angular/core';
import { DocumentManagerCtx } from './document-manager.types';

const DEFAULT_DOCUMENTS = [
  {
    name: 'Clean Code',
  },
  {
    name: 'Clean Architecture',
  },
  {
    name: 'Design Patterns',
  },
];

const PRODUCT_DOCUMENTS = [
  {
    name: 'Porta filter user guide',
  },
  {
    name: 'Espresso machine manual',
  },
  {
    name: 'Coffee tamper warranty information',
  },
];

@Injectable({
  providedIn: 'root',
})
export class DocumentManagerService {
  documents = signal(DEFAULT_DOCUMENTS);

  loadDocumentsForContext(context: DocumentManagerCtx) {
    this.documents.set(
      context === 'product' ? PRODUCT_DOCUMENTS : DEFAULT_DOCUMENTS,
    );
  }
}
