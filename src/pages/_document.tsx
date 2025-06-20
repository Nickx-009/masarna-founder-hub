import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" />
        
        {/* Favicon */}
        <link rel="icon" href="/lovable-uploads/4c19cc81-9f30-4ff8-b639-79916ff68ecd.png" type="image/png" />
        <link rel="apple-touch-icon" href="/lovable-uploads/4c19cc81-9f30-4ff8-b639-79916ff68ecd.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}