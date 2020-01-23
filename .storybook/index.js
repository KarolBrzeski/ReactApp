import { configure } from '@storybook/react';

configure(
  [
    require.context('../src/components', true, /\.stories\.js$/),
    require.context('../lib', true, /\.stories\.js$/),
  ],
  module,
);
