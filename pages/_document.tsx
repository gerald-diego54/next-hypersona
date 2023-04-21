import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
            </Head>
            <body className="bg-floppy-disk font-azeret-mono min-w-[100vm]">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
