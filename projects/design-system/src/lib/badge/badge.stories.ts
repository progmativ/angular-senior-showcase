import type {Meta, StoryObj} from '@storybook/angular';
import {fn} from '@storybook/test';
import {BadgeComponent} from './badge.component';
import {BadgeSize} from './badge.model';
import {Color} from '../../models/color.model';

const meta: Meta<BadgeComponent> = {
  title: 'DesignSystem/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],

  argTypes: {
    size: {
      control: 'select',
      options: Object.values(BadgeSize),
    },
    color: {
      control: 'select',
      options: Object.values(Color),
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const BrandPrimary: Story = {
  args: {
    label: 'Brand primary',
    color: Color.PRIMARY,
  },
};

export const UiGrey1: Story = {
  args: {
    label: 'Ui Grey 1',
    color: Color.UI_GREY_1,
  },
};

