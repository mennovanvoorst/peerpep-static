import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="nl">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className="font-sans font-light text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
