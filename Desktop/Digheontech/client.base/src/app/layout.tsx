import { Suspense, ReactNode } from 'react';
import { section } from '@/constants';
import { ReactQueryProvider } from '@/utils/react-query-provider';

import './globals.css';

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  return (
    <html
      lang={params.locale}
      className={`!text-slate-600 text-sm ${section.variable} font-section`}
    >
      <body>
        <Suspense fallback={null}>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </Suspense>
      </body>
    </html>
  );
}
