import Error from 'next/error'

function ErrorPage({ errorCode }) {
    return <Error statusCode={errorCode} />
}

ErrorPage.getInitialProps = async ({ res }) => {
    var errorCode
    if (res) {
        errorCode = res.statusCode > 200 ? res.statusCode : false
        if (errorCode < 500) {
            if (typeof res.writeHead === 'function') {
                res.writeHead(
                    301,
                    {
                        Location: '/',
                        'Content-Type': 'text/html; charset=utf-8',
                    })
                res.end()
            }
        }
    }
    return {
        props: { errorCode }
    }
}

export default ErrorPage
