import Head from "next/head";

const Header = ({ title, extra_meta, properties }) => (
  <Head>
    <meta name="author" content="CleberW3b - Cléber Oliveira" key="author" />
    <title>{title ? title : "nossovoto"}</title>
    {extra_meta
      ? extra_meta.map(ex_meta => (
        <meta
          name={ex_meta.name}
          content={ex_meta.content}
          key={ex_meta.name}
        />
      ))
      : null}
    {properties
      ? properties.map(property => (
        <meta
          property={property.property}
          content={property.content}
          key={property.property}
        />
      ))
      : null}
    <link rel="shortcut icon" href="/static/favicon.ico" key="icon" />
  </Head>
);

export default Header;
