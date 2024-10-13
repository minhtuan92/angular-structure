import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'my-app-1-second-layout',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    TitleCasePipe,
  ],
  templateUrl: './second-layout.component.html',
  styleUrl: './second-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondLayoutComponent {
  year = new Date().getFullYear();
}
