import {ChangeDetectionStrategy, Component, computed, HostBinding, input, Input} from '@angular/core';
import {BadgeSize} from './badge.model';
import {Color, CssVariable} from '../../models';

@Component({
  selector: 'ui-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  host: {
    '[class]': `cssClasses()`,
    '[style.background]': `backgroundColor()`,
    '[aria-label]': `ariaLabel() || label()`
  }
})
export class BadgeComponent {
  public readonly label = input.required<string>();
  public readonly ariaLabel = input<string>();
  public readonly size = input<BadgeSize>(BadgeSize.MEDIUM);
  public readonly color = input<Color>(Color.PRIMARY);

  public readonly cssClasses = computed(() => {
    return [
      'badge',
      `badge--size-${this.size()}`
    ]
  });
  public readonly backgroundColor = computed(() => {
    return `var(--${this.color()})`;
  })
}
