import Head from "next/head"
import Banner from "components/banner/banner"
import SobrePage from "components/sobrePage/sobrePage"

const meta = {
  title: "nossovoto - Sobre",
  keywords: "sobre, nossovoto, politica, congresso nacional, brasil, camara federal, senado federal",
  description: "O nossovoto aproxima o cidadão da política brasileira, disponibilizando tudo o que ocorre no Senado Federal e na Câmara dos Deputados Federais."
}

const Sobre = () => (
  <>
    <Head>
      <title>{meta.title}</title>
      <meta name={Object.keys(meta)[1]} content={meta.keywords} key={Object.keys(meta)[1]} />
      <meta name={Object.keys(meta)[2]} content={meta.description} key={Object.keys(meta)[2]} />
    </Head>
    <Banner />
    <SobrePage />
  </>
)

export default Sobre
