import React from 'react';
import Sidebar from 'components/organisms/Sidebar';
import StoryRouter from 'storybook-react-router';

export default {
  component: Sidebar,
  title: 'Organisms/Sidebar',
  decorators: [StoryRouter()],
};

export const SidebarCmp = () => <Sidebar />;
