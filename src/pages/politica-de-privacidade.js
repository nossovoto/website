// pages/index.js

import Header from "../components/header";
import PrivacyPolicies from "../components/privacyPolicy/privacyPolicy";
import Banner from "../components/banner/banner";

const title = "nossovoto - Politica de Privacidade";

const keywords = {
  name: "keywords",
  content:
    "politica, senado, camara dos deputados, governo, cidadão, direito, constituição"
};

const description = {
  name: "description",
  content: "Criando a ponte entre o governo e o cidadão"
};

const extra_meta = [keywords, description];

const PrivacyPolicy = ({ initialProps }) => (
  <>
    <Header title={title} extra_meta={extra_meta} />
    <Banner />
    <PrivacyPolicies />
  </>
);

PrivacyPolicy.getInitialProps = async function() {
  return { initialProps: {} };
};

export default PrivacyPolicy;
