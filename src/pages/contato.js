import Head from "next/head";
import Banner from "../components/banner/banner";
import Contact from "../components/contact/contact";

const meta = {
  title: "nossovoto - Contato",
  keywords: "contato, nossovoto, politica",
  description: "Sua opinião é muito importante para nós. Entre em contato conosco pelo site ou pelo e-mail contato@nossovoto.com.br. Estamos a disposição para responder seus questionamentos, ouvir suas críticas e sugestões."
};

const Contato = () => (
  <>
    <Head>
      <title>{meta.title}</title>
      <meta name={Object.keys(meta)[1]} content={meta.keywords} key={Object.keys(meta)[1]} />
      <meta name={Object.keys(meta)[2]} content={meta.description} key={Object.keys(meta)[2]} />
    </Head>
    <Banner />
    <Contact />
  </>
);

export default Contato;