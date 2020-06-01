import { GA_TRACKING_ID } from "util/consts"

export const webVitals = ({ name, value, id }) => {
    event({
        action: name,
        category: 'Web Vitals',
        // The `id` value will be unique to the current page load. When sending
        // multiple values from the same page (e.g. for CLS), Google Analytics can
        // compute a total by grouping on this ID (note: requires `eventLabel` to
        // be a dimension in your report).
        label: id,
        // Google Analytics metrics must be integers, so the value is rounded.
        // For CLS the value is first multiplied by 1000 for greater precision
        // (note: increase the multiplier for greater precision if needed).
        _value: Math.round(name === 'CLS' ? value * 1000 : value),
        // Use a non-interaction event to avoid affecting bounce rate.
        non_interaction: true
    })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url
    })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, _value, ...config }) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: _value,
        ...config
    })
}

// Global Site Tag (gtag.js) - Google Analytics
export const GtagScript = () => (
    <>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <script dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
        `
        }} />
    </>
)

// No Script Global Site Tag (gtag.js) - Google Analytics
export const GtagNoscript = () => (
    <>
        <noscript>
            <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
            />
        </noscript>
    </>
)