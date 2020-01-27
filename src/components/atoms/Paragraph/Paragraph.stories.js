import React from 'react';
import Paragraph from './Paragraph';
import { theme } from '../../../theme/mainTheme';

export default {
  component: Paragraph,
  title: 'Paragraph',
};

export const Normal = () => <Paragraph theme={theme}>Hello React</Paragraph>;
