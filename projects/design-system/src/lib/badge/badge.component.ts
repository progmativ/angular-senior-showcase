import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {BadgeSize} from './badge.model';
import {Color, CssVariable} from '../../models';

@Component({
  selector: 'ui-badge',
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class BadgeComponent {
  @HostBinding('class')
  get cssClasses(): string[] {
    return [
      'badge',
      `badge--size-${this.size}`
    ];
  }
  @Input()
  size: BadgeSize = BadgeSize.MEDIUM;
  @HostBinding('style.background-color')
  @Input({ transform: (color: Color): CssVariable => `var(--${color})`, required: true})
  color!: CssVariable;
  @Input({required: true})
  label!: string;
}
