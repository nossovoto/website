import Head from "next/head";
import Terms from "../components/terms/terms";
import Banner from "../components/banner/banner";

const meta = {
  title: "nossovoto - Termos e Serviços",
  keywords: "nossovoto, politica, termos de serviços",
  description: "Saiba mais sobre os Termos de Serviço do nossovoto, que regem seu uso do nossovoto e dos recursos, serviços, tecnologia e software."
}

const TermsAndServices = () => (
  <>
    <Head>
      <title>{meta.title}</title>
      <meta name={Object.keys(meta)[1]} content={meta.keywords} key={Object.keys(meta)[1]} />
      <meta name={Object.keys(meta)[2]} content={meta.description} key={Object.keys(meta)[2]} />
    </Head>
    <Banner />
    <Terms />
  </>
);

export default TermsAndServices;