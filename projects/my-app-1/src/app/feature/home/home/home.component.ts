import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { myUtil } from '../../../core/utils/my-util/my-util';
import { MyPipe } from '../../../ui/pipes/my-pipe/my-pipe.pipe';

@Component({
  selector: 'my-app-1-home',
  standalone: true,
  imports: [MyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private authService = inject(AuthService);
  test = myUtil(1);
}
