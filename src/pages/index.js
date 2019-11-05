// pages/index.js

import Header from "../components/header";
import Banner from "../components/banner/banner";
import Why from "../components/home/why/why";
import Casas from "../components/home/casas/casas";
import BlogSection from "../components/home/blogSection/blog-section";
import Newsletter from "../components/newsletter/newsletter";
import SobreSection from "../components/home/sobreSection/sobreSection";
import { getPosts } from "../../public/js/getPosts";

const title = "nossovoto";

const keywords = {
  name: "keywords",
  content:
    "politica, senado, camara dos deputados, governo, cidadão, direito, constituição"
};

const description = {
  name: "description",
  content: "Criando a ponte entre o governo e o cidadão"
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

Home.getInitialProps = async function() {
  const posts = await getPosts();
  return { posts: posts };
};

export default Home;
