import Head from "next/head"
import PrivacyPolicies from "../components/privacyPolicy/privacyPolicy"
import Banner from "../components/banner/banner"

const meta = {
  title: "nossovoto - Politica de Privacidade",
  keywords: "nossovoto, politica, politica de privacidade",
  description: "Saiba mais sobre as práticas e a Política de Privacidade do nossovoto, além dos tipos de informação que o nossovoto recebe e como elas são usadas."
}

const PrivacyPolicy = () => (
  <>
    <Head>
      <title>{meta.title}</title>
      <meta name={Object.keys(meta)[1]} content={meta.keywords} key={Object.keys(meta)[1]} />
      <meta name={Object.keys(meta)[2]} content={meta.description} key={Object.keys(meta)[2]} />
    </Head>
    <Banner />
    <PrivacyPolicies />
  </>
)

export default PrivacyPolicy
