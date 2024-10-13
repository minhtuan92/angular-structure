import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { MyPipePipe } from '../../../shared/pipe/my-pipe/my-pipe.pipe';
import { myUtil } from '../../../core/utils/my-util/my-util';

@Component({
  selector: 'my-app-1-home',
  standalone: true,
  imports: [MyPipePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private authService = inject(AuthService);
  test = myUtil(1);
}
