import Header from "../components/header";
import BlogBanner from "../components/blog/banner/banner";
import BlogBox from "../components/blog/blog-box/blog-box";
import { getPosts } from "../../public/js/getPosts";

const title = "nossovoto - Blog";

const keywords = {
  name: "keywords",
  content: "blog, nossovoto, educação politica, politica, educação"
};

const description = {
  name: "description",
  content: "Aprenda o funcionamento da Política Brasileira sem juridiquês. Aqui nós falamos a sua língua. Sem enrolação e direto ao ponto."
};

const extra_meta = [keywords, description];

const Blog = ({ posts, currentUrl }) => (
  <>
    <Header title={title} extra_meta={extra_meta} />
    <BlogBanner />
    <BlogBox posts={posts} currentUrl={currentUrl} />
  </>
);

Blog.getInitialProps = async ({ req }) => {
  const host = req ? req.headers.host : "nossovoto.com.br";
  const path = req ? req.url : "/blog";
  const posts = await getPosts();
  const currentUrl = "https://" + host + path;
  return { posts: posts, currentUrl: currentUrl };
};

export default Blog;
