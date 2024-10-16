import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { DocumentManagerComponent } from '../../../pattern/components/document-manager/document-manager.component';
import { CardComponent } from '../../../ui/components/card/card.component';

@Component({
  selector: 'my-app-1-order-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    MatButtonModule,
    DocumentManagerComponent,
    CardComponent,
  ],
  templateUrl: './order-dashboard.component.html',
  styleUrl: './order-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderDashboardComponent {}
