import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import theme from 'src/styles/theme';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
