// https://storybook.js.org/docs/angular/configure/overview#configure-story-rendering
// this file contains: global decorators, global parameters, global types

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { setCompodocJson } from '@storybook/addon-docs/dist/frameworks/angular';
import compodocJson from './documentation.json';

// compodoc delivers information about members etc ..
setCompodocJson(compodocJson);

// *****************************************************************************
// ********** GLOBAL DECORATORS ************************************************
// *****************************************************************************
// export const decorators = [
//   moduleMetadata({

//   }),
// ];

// *****************************************************************************
// ********** GLOBAL PARAMETERS ************************************************
// *****************************************************************************

export const parameters = {
  docs: {
    // currently there is no auto,
    // reminder for myself: keep on watching !!!???
    iframeHeight: 450,
  },
  controls: { hideNoControlsWarning: true, expanded: true },
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: false,
  },
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#ffffff' },
      { name: 'twitter', value: '#00aced' },
      { name: 'facebook', value: '#3b5998' },
      { name: 'black', value: '#000' },
      { name: 'grey', value: '#3f3f3f' },
      { name: 'yellow', value: 'yellow' },
      { name: 'green', value: 'green' },
    ],
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

// *****************************************************************************
// ********** GLOBAL TYPES *****************************************************
// *****************************************************************************

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for base',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
    },
  },
  locale: {
    name: 'Locale',
    description: 'i18n lazy-locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'de', right: '🇩🇪', title: 'Deutsch' },
      ],
    },
  },
};
