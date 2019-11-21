// pages/index.js

import Header from "../components/header";
import Banner from "../components/banner/banner";
import Why from "../components/home/why/why";
import Casas from "../components/home/casas/casas";
import BlogSection from "../components/home/blogSection/blogSection";
import Newsletter from "../components/newsletter/newsletter";
import SobreSection from "../components/home/sobreSection/sobreSection";
import { getPosts } from "../../public/js/getPosts";

const title = "nossovoto";

const keywords = {
  name: "keywords",
  content: "home, nossovoto, politica, congresso nacional, brasil, câmara federal, senado federal, lei, leis"
};

const description = {
  name: "description",
  content: "O nossovoto aproxima o cidadão da política brasileira, disponibilizando tudo o que ocorre no Senado Federal e na Câmara dos Deputados Federais."
};

const extra_meta = [keywords, description];

const Home = ({ posts }) => {
  return (
    <>
      <Header title={title} extra_meta={extra_meta} />
      <Banner />
      <Why />
      <Casas />
      <BlogSection posts={posts} />
      <Newsletter />
      <SobreSection />
    </>
  );
};

Home.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts: posts };
};

export default Home;
