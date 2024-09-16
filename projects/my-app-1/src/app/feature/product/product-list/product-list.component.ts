import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { CardComponent } from '../../../ui/card/card.component';
import { DocumentManagerComponent } from '../../../pattern/document-manager/document-manager.component';

import { ProductService } from '../product.service';

@Component({
  selector: 'my-org-product-list',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    MatButtonModule,
    MatIconModule,
    CardComponent,
    DocumentManagerComponent,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  products = inject(ProductService).products;
}
