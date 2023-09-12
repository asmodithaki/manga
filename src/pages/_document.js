import Document, { Html, Head, Main, NextScript } from 'next/document';

const APP_NAME = "Thurisa - Your Window into the future";
const APP_DESCRIPTION =
  "Thurisa Labs is a software development company that specializes in building web and mobile applications for startups and small to medium-sized businesses.";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Open+Sans:wght@400;600&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
