import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import infoAddon, { setDefaults } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import '../src/global.styles';

const req = require.context('../src', true, /\.stories\.js$/);

// Configure withInfo addon
setDefaults({
    inline: true,
    source: false
});
setAddon(infoAddon);

// Configure theme provider
const Themer = (storyFn) => (
    <ThemeProvider theme={theme}>
        { storyFn() }
    </ThemeProvider>
);
addDecorator(Themer);

const loadStories = () => req.keys().forEach(f => req(f));

configure(loadStories, module);
