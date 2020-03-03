import React from 'react';
import Card from './Card/Card';

export default {
  component: Card,
  title: 'Card',
};

export const Primary = () => <Card />;
export const Secondary = () => <Card cardType="secondary" />;
export const Tertiary = () => <Card cardType="tertiary" />;
