import Head from 'next/head';
import '../public/globals.css';
import type { AppProps } from 'next/app';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Genes app</title>
      </Head>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
