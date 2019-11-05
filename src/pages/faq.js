// pages/index.js

import Header from "../components/header";
import Banner from "../components/banner/banner";
import FAQPage from "../components/faq/faq";

const title = "nossovoto - FAQ";

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

const FAQ = ({ initialProps }) => (
  <>
    <Header title={title} extra_meta={extra_meta} />
    <Banner />
    <FAQPage />
  </>
);

FAQ.getInitialProps = async function() {
  return { initialProps: {} };
};

export default FAQ;
