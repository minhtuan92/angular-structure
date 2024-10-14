import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ProductService } from '../product.service';
import { CardComponent } from '../../../ui/components/card/card.component';
import { DocumentManagerComponent } from '../../../pattern/components/document-manager/document-manager.component';

@Component({
  selector: 'my-app-1-product-list',
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
