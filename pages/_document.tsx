import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
            </Head>
            <body className="min-w-[100vm] bg-floppy-disk font-azeret-mono">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
