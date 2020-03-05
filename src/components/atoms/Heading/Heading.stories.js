import React from 'react';
import Heading from './Heading';
import { theme } from '../../../theme/mainTheme';

export default {
  component: Heading,
  title: 'Atoms/Heading',
};

export const Normal = () => <Heading theme={theme}>Hello Karol</Heading>;
export const Big = () => (
  <Heading theme={theme} big>
    Hello Karol
  </Heading>
);
