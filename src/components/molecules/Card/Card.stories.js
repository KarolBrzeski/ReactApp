import React from 'react';
import Card from './Card';

export default {
  component: Card,
  title: 'Molecules/Card',
};

export const Primary = () => <Card />;
export const Secondary = () => <Card cardType="secondary" />;
export const Tertiary = () => <Card cardType="tertiary" />;
