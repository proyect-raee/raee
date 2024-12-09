import type { Metadata } from 'next';

import localFont from 'next/font/local';

export const section = localFont({
  src: [
    {
      path: '../public/fonts/section-medium.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/section-mediumItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/section-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/section-light.otf',
      weight: '200',
      style: 'normal',
    },
  ],
  variable: '--font-section',
});

export const metadata: Metadata = {
  title: 'PMI Realty',
  description:
    'PMI Realty is a full-service real estate brokerage that provides a wide range of real estate services.',
};

export const LOGOUT_INVALID_TOKEN_ERROR = 'invalid_token';
