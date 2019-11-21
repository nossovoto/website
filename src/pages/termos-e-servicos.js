// pages/index.js

import Header from "../components/header";
import Terms from "../components/terms/terms";
import Banner from "../components/banner/banner";

const title = "nossovoto - Termos e Serviços";

const keywords = {
  name: "keywords",
  content: "nossovoto, politica, termos de serviços"
};

const description = {
  name: "description",
  content: "Saiba mais sobre os Termos de Serviço do nossovoto, que regem seu uso do nossovoto e dos recursos, serviços, tecnologia e software."
};

const extra_meta = [keywords, description];

const TermsAndServices = ({ initialProps }) => (
  <>
    <Header title={title} extra_meta={extra_meta} />
    <Banner />
    <Terms />
  </>
);

TermsAndServices.getInitialProps = async () => {
  return { initialProps: {} };
};

export default TermsAndServices;
