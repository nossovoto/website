import Head from "next/head";
import Banner from "../components/banner/banner";
import Contact from "../components/contact/contact";

const title = "nossovoto - Contato";

const keywords = {
  name: "keywords",
  content: "contato, nossovoto, politica"
};

const description = {
  name: "description",
  content: "Sua opinião é muito importante para nós. Entre em contato conosco pelo site ou pelo e-mail contato@nossovoto.com.br. Estamos a disposição para responder seus questionamentos, ouvir suas críticas e sugestões."
};

const TermsAndServices = ({ initialProps }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name={keywords.name} content={keywords.content} key={keywords.name} />
      <meta name={description.name} content={description.content} key={description.name} />
    </Head>
    <Banner />
    <Contact />
  </>
);

TermsAndServices.getInitialProps = async () => {
  return { initialProps: {} };
};

export default TermsAndServices;
