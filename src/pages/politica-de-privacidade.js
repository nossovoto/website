import Head from "next/head";
import PrivacyPolicies from "../components/privacyPolicy/privacyPolicy";
import Banner from "../components/banner/banner";

const title = "nossovoto - Politica de Privacidade";

const keywords = {
  name: "keywords",
  content: "nossovoto, politica, politica de privacidade"
};

const description = {
  name: "description",
  content: "Saiba mais sobre as práticas e a Política de Privacidade do nossovoto, além dos tipos de informação que o nossovoto recebe e como elas são usadas."
};

const PrivacyPolicy = ({ initialProps }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name={keywords.name} content={keywords.content} key={keywords.name} />
      <meta name={description.name} content={description.content} key={description.name} />
    </Head>
    <Banner />
    <PrivacyPolicies />
  </>
);

PrivacyPolicy.getInitialProps = async () => {
  return { initialProps: {} };
};

export default PrivacyPolicy;
