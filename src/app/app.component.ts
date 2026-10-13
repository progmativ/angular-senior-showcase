import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BadgeComponent} from '../../projects/design-system/src/lib/badge';
import {Color} from '../../projects/design-system/src/models';
import {ThemeManager} from '../../projects/design-system/src/core/theme-manager.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BadgeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly themeManager = inject(ThemeManager);

  public readonly title = 'angular-senior-showcase';
  protected readonly Color = Color;

}

