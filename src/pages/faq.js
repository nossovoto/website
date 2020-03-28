import Head from "next/head";
import Banner from "../components/banner/banner";
import FAQPage from "../components/faq/faq";

const meta = {
  title: "nossovoto - FAQ",
  keywords: "perguntas, FAQ, nossovoto, politica, duvidas, congresso",
  description: "Tem alguma pergunta? Consulte nosso canal de dúvidas e se mesmo assim não achar as respostas não deixe de nos contatar no contato@nossovoto.com.br"
};

const FAQ = () => (
  <>
    <Head>
      <title>{meta.title}</title>
      <meta name={Object.keys(meta)[1]} content={meta.keywords} key={Object.keys(meta)[1]} />
      <meta name={Object.keys(meta)[2]} content={meta.description} key={Object.keys(meta)[2]} />
    </Head>
    <Banner />
    <FAQPage />
  </>
);

export default FAQ;