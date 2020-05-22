import Head from "next/head"
import Banner from "../components/banner/banner"
import Why from "../components/home/why/why"
import Casas from "../components/home/casas/casas"
import SobreSection from "../components/home/sobreSection/sobreSection"

const meta = {
  title: "nossovoto",
  keywords: "home, nossovoto, politica, congresso nacional, brasil, câmara federal, senado federal, lei, leis",
  description: "O nossovoto aproxima o cidadão da política brasileira, disponibilizando tudo o que ocorre no Senado Federal e na Câmara dos Deputados Federais."
}

const Home = () => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name={Object.keys(meta)[1]} content={meta.keywords} key={Object.keys(meta)[1]} />
        <meta name={Object.keys(meta)[2]} content={meta.description} key={Object.keys(meta)[2]} />
      </Head>
      <Banner />
      <Why />
      <Casas />
      <SobreSection />
    </>
  )
}

export default Home
