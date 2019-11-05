// pages/_app.js
import React from "react";
import App from "next/app";
import Layout from "../layout/layout";
import "../../public/styles/theme.scss";

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
