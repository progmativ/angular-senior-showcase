import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BadgeComponent} from '../../projects/design-system/src/lib/badge';
import {Color} from '../../projects/design-system/src/models';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BadgeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-senior-showcase';
  protected readonly Color = Color;
}
