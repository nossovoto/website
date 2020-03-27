import Error from 'next/error';
import Router from "next/router";

const redirectPath = "summary";

function ErrorPage({ errorCode }) {
    if (errorCode < 500) {
        Router.push(redirectPath);
    }
    return <Error statusCode={errorCode} />
}

ErrorPage.getInitialProps = async ({ res }) => {
    var errorCode;
    if (res) {
        errorCode = res.statusCode > 200 ? res.statusCode : false;
        if (errorCode < 500) {
            res.writeHead(
                301,
                {
                    Location: '/',
                    'Content-Type': 'text/html; charset=utf-8',
                });
            res.end();
        }
    }
    return { errorCode };
};

export default ErrorPage;