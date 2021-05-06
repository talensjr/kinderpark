import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

const Fonts = () => (
  <>
    <link
      rel="preload"
      href="/fonts/crafty-girls/regular.ttf"
      as="font"
      crossOrigin="anonymous"
    />

    <link
      rel="preload"
      href="/fonts/open-sans/regular.ttf"
      as="font"
      crossOrigin="anonymous"
    />
    <link
      rel="preload"
      href="/fonts/open-sans/light.ttf"
      as="font"
      crossOrigin="anonymous"
    />
  </>
)

const Favicons = () => (
  <>
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/favicons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicons/favicon-16x16.png"
    />
    <link rel="manifest" href="/favicons/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/favicons/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />
  </>
)

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <Fonts />
          <Favicons />
        </Head>
        <body className="font-main">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
