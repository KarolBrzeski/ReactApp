import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { theme } from '../../../theme/mainTheme';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs],
};

// Knobs as dynamic variables.
export const DynamicButton = () => {
  const label = 'color';
  const textLabel = 'textColor';

  const options = {
    Red: '#FF0033',
    Blue: '#0066FF',
    Aqua: '#00FFFF',
  };

  const textOptions = {
    White: 'white',
    Black: 'black',
  };

  const defaultValue = '#ffd82b';
  const defaultTextValue = 'white';
  const value = select(label, options, defaultValue);
  const textValue = select(textLabel, textOptions, defaultTextValue);

  const name = text('Name', 'Colorful btn');

  return (
    <Button color={value} textColor={textValue}>
      {name}
    </Button>
  );
};

export const Aqua = () => (
  <Button color="#00FFFF" textColor="black">
    AQUA
  </Button>
);
export const Primary = () => <Button theme={theme}>Hello Karol</Button>;
export const Secondary = () => <Button secondary>Hello Karol</Button>;
