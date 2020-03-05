import React from 'react';
import Input from './Input';
import { theme } from '../../../theme/mainTheme';

export default {
  component: Input,
  title: 'Atoms/Input',
};

export const Normal = () => <Input theme={theme} placeholder="login" />;
export const Search = () => <Input theme={theme} placeholder="search" search />;
