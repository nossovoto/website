export const GA_TRACKING_ID = 'GTM-MG3N33S'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url
    })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
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