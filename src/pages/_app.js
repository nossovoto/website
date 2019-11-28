// pages/_app.js
import React from "react";
import App from "next/app";
import Router from 'next/router'
import Layout from "../layout/layout";
import * as gtag from '../libs/gtag'
import "../../public/styles/theme.scss";

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
