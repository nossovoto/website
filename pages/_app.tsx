import React from "react"
import App from "next/app"
import Router from 'next/router'
import Layout from "layout/layout"
import * as gtag from 'util/third_part_scripts/gtag'
import { isProductionEnv, isDevelopmentEnv } from "util/consts"
import "public/styles/theme.scss"

// Will be called once for every metric that has to be reported.
// These metrics can be sent to any analytics service
export function reportWebVitals(metric) {
  const { name, value, id } = metric
  if (isDevelopmentEnv)
    // tslint:disable-next-line:no-console
    console.log(metric)
  else if (isProductionEnv)
    gtag.webVitals(metric)
}

if (isProductionEnv)
  Router.events.on('routeChangeComplete', url => gtag.pageview(url))

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
