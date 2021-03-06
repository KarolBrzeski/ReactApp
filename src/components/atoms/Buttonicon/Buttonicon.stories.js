import React from 'react';
import bulbIcon from 'assets/icons/bulb.svg';
import plus from 'assets/icons/plus.svg';
import pen from 'assets/icons/pen.svg';
import twitter from 'assets/icons/twitter.svg';
import logout from 'assets/icons/logout.svg';
import ButtonIcon from './Buttonicon';
import CustomBackgroundColor from './CustomBackgroundColor';
import { theme } from '../../../theme/mainTheme';

export default {
  component: ButtonIcon,
  title: 'Atoms/Button Icon',
  decorators: [
    storyFn => <CustomBackgroundColor theme={theme.primary}>{storyFn()}</CustomBackgroundColor>,
  ],
};

export const Normal = () => <ButtonIcon icon={bulbIcon} />;
export const NormalActive = () => <ButtonIcon icon={bulbIcon} active />;
export const Plus = () => <ButtonIcon icon={plus} />;
export const PlusActive = () => <ButtonIcon icon={plus} active />;
export const Pen = () => <ButtonIcon icon={pen} />;
export const PenActive = () => <ButtonIcon icon={pen} active />;
export const Twitter = () => <ButtonIcon icon={twitter} />;
export const TwitterActive = () => <ButtonIcon icon={twitter} active />;
export const Logout = () => <ButtonIcon icon={logout} />;
export const LogoutActive = () => <ButtonIcon icon={logout} active />;
