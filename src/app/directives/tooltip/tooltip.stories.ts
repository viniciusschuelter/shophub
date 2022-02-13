import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from '@app/components/forms/button/button.module';
import {AwesomeTooltipModule} from '@app/directives/tooltip/tooltip.module';
import { action } from '@storybook/addon-actions';
import {moduleMetadata, storiesOf} from '@storybook/angular';

import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';

storiesOf('Tooltip', module)
  .addDecorator(withKnobs)
  .addParameters({ layout: 'centered' })
  .add('tooltip', () => ({
  template: `
    <p [awesomeTooltip]="text">
        {{ content }}
    </p>
  `,
  props: {
    text: text('Hover text', 'tooltip!'),
    content: text('target content', 'hover me!'),
  },
  moduleMetadata: {
    imports: [CommonModule, ButtonModule, AwesomeTooltipModule, BrowserAnimationsModule]
  },
}))
