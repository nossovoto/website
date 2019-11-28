import Head from "next/head";
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

const TermsAndServices = ({ initialProps }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name={keywords.name} content={keywords.content} key={keywords.name} />
      <meta name={description.name} content={description.content} key={description.name} />
    </Head>
    <Banner />
    <Terms />
  </>
);

TermsAndServices.getInitialProps = async () => {
  return { initialProps: {} };
};

export default TermsAndServices;
