import Head from "next/head";
import Banner from "../components/banner/banner";
import SobrePage from "../components/sobrePage/sobrePage";

const title = "nossovoto - Sobre";

const keywords = {
  name: "keywords",
  content: "sobre, nossovoto, politica, congresso nacional, brasil, camara federal, senado federal"
};

const description = {
  name: "description",
  content: "O nossovoto aproxima o cidadão da política brasileira, disponibilizando tudo o que ocorre no Senado Federal e na Câmara dos Deputados Federais."
};


const Sobre = ({ initialProps }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name={keywords.name} content={keywords.content} key={keywords.name} />
      <meta name={description.name} content={description.content} key={description.name} />
    </Head>
    <Banner />
    <SobrePage />
  </>
);

Sobre.getInitialProps = async () => {
  return { initialProps: {} };
};

export default Sobre;
