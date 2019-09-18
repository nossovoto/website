import Head from "next/head";

const Header = props => (
  <Head>
    <meta name="author" content="CleberW3b - Cléber Oliveira" key="author" />
    <title>{props.title}</title>
    {props.extra_meta
      ? props.extra_meta.map(ex_meta => (
          <meta
            name={ex_meta.name}
            content={ex_meta.content}
            key={ex_meta.name}
          />
        ))
      : null}
    <link rel="shortcut icon" href="/static/favicon.ico" key="icon" />
  </Head>
);

export default Header;
