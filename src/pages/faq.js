// pages/index.js

import Header from "../components/header";
import Banner from "../components/banner/banner";
import FAQPage from "../components/faq/faq";

const title = "nossovoto - FAQ";

const keywords = {
  name: "keywords",
  content: "perguntas, FAQ, nossovoto, politica, duvidas, congresso"
};

const description = {
  name: "description",
  content: "Tem alguma pergunta? Consulte nosso canal de dúvidas e se mesmo assim não achar as respostas não deixe de nos contatar no contato@nossovoto.com.br"
};

const extra_meta = [keywords, description];

const FAQ = ({ initialProps }) => (
  <>
    <Header title={title} extra_meta={extra_meta} />
    <Banner />
    <FAQPage />
  </>
);

FAQ.getInitialProps = async () => {
  return { initialProps: {} };
};

export default FAQ;
