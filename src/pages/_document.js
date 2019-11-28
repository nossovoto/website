import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document';
import { GtagScript, GtagNoscript } from '../libs/gtag'

export default class extends Document {
    render() {
        return (
            <html lang="pt-br">
                <Head>
                    <GtagScript />
                    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1, shrink-to-fit=no" />
                    <meta charset="utf-8" />
                    <meta name="author" content="CleberW3b - Cléber Oliveira" key="author" />
                    <meta name="robots" content="all" />
                    <meta name="revisit-after" content="1 day" />
                    <meta name="language" content="Portuguese" />
                    <meta name="generator" content="N/A" />
                    <meta name="theme-color" content="#000000" />
                    <link rel="shortcut icon" href="/static/favicon.ico" key="icon" />
                    <link rel="manifest" href="/manifest.json" />
                </Head>
                <body>
                    <GtagNoscript />
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}