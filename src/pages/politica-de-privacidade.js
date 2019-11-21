// pages/index.js

import Header from "../components/header";
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

const extra_meta = [keywords, description];

const PrivacyPolicy = ({ initialProps }) => (
  <>
    <Header title={title} extra_meta={extra_meta} />
    <Banner />
    <PrivacyPolicies />
  </>
);

PrivacyPolicy.getInitialProps = async () => {
  return { initialProps: {} };
};

export default PrivacyPolicy;
