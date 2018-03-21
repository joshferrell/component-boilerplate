import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import {
    withKnobs,
    text,
    boolean,
    select
} from '@storybook/addon-knobs/react';
/* eslint-enable import/no-extraneous-dependencies */

import theme from '../../theme';
import Button from './button';
import { ButtonLarge, ButtonLargeLink } from './button-large';
import ButtonLink from './button-link';

storiesOf('Atoms/Button', module)
    .addDecorator(checkA11y)
    .addDecorator(withKnobs)
    .add(
        'simple button',
        withInfo(`
            ## About
            A simple button that executes an action

            ## Usage
            ~~~js
            import { Button } from 'component-lib/atoms';

            <Button>I am a simple button :)</Button>
            ~~~
        `)(() => (
            <Button
                onClick={action('button clicked')}
                type={select('Type', Object.keys(theme.colors.types), 'primary')}
            >
                {text('Text', 'I am a simple button :)')}
            </Button>
        ))
    )
    .add(
        'as a link',
        withInfo(`
            ## About
            A simple button that executes an action

            ## Usage
            ~~~js
            import { ButtonLarge } from 'component-lib/atoms';

            <ButtonLarge>I am a simple button :)</ButtonLarge>
            ~~~
        `)(() => (
            <ButtonLink
                href="http://google.com"
                target="_blank"
                type={select('Type', Object.keys(theme.colors.types), 'primary')}
            >
                {text('Text', 'Go to google')}
            </ButtonLink>
        ))
    )
    .add(
        'large button',
        withInfo(`
            ## About
            A simple button that executes an action

            ## Usage
            ~~~js
            import { ButtonLarge } from 'component-lib/atoms';

            <ButtonLarge>I am a simple button :)</ButtonLarge>
            ~~~
        `)(() => (
            <ButtonLarge
                onClick={action('button clicked')}
                type={select('Type', Object.keys(theme.colors.types), 'primary')}
            >
                {text('Text', 'I am a simple button :)')}
            </ButtonLarge>
        ))
    )
    .add(
        'large button link',
        withInfo(`
            ## About
            A simple button that executes an action

            ## Usage
            ~~~js
            import { ButtonLarge } from 'component-lib/atoms';

            <ButtonLarge>I am a simple button :)</ButtonLarge>
            ~~~
        `)(() => (
            <ButtonLargeLink
                href="http://google.com"
                target="_blank"
                type={select('Type', Object.keys(theme.colors.types), 'primary')}
            >
                {text('Text', 'I am a simple button :)')}
            </ButtonLargeLink>
        ))
    );
