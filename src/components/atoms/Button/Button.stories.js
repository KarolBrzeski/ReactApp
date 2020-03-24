import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  component: Button,
  title: 'Atoms/atomsButton',
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

export const Notes = () => (
  <Button type="primary" textColor="black">
    Notes
  </Button>
);

export const Articles = () => (
  <Button type="secondary" textColor="black">
    Articles
  </Button>
);

export const Twitters = () => (
  <Button type="tertiary" textColor="black">
    Twitters
  </Button>
);

export const Primary = () => <Button>Hello Karol</Button>;
export const Secondary = () => <Button secondary>Hello Karol</Button>;
