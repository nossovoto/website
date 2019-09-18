// pages/index.js

import Header from "../components/layout/header";
import Banner from "../components/home/banner";
import Why from "../components/home/why";
import Casas from "../components/home/casas";
import BlogSection from "../components/home/blog-section";
import Newsletter from "../components/home/newsletter";
import Sobre from "../components/home/sobre";
import GetPosts from "../static/js/getPostExample";

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

const meta = [keywords, description];

const Home = () => (
  <div>
    <Header title={title} extra_meta={meta} />
    <Banner />
    <Why />
    <Casas />
    <BlogSection posts={GetPosts()} />
    <Newsletter />
    <Sobre />
  </div>
);

export default Home;
