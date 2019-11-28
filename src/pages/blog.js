import Head from "next/head";
import BlogBanner from "../components/blog/banner/banner";
import BlogBox from "../components/blog/blog-box/blog-box";
import { getPosts } from "../../public/js/getPosts";

const facebookProperties = () => {
  return [
    { property: "og:url", content: "http://www.nossovoto.com.br/blog" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Blog" },
    { property: "og:description", content: "Aprenda o funcionamento da Política Brasileira sem juridiquês. Aqui nós falamos a sua língua. Sem enrolação e direto ao ponto." },
    { property: "og:image", content: "https://nossovoto.com.br/static/images/logo_brasao.png" },
    { property: "og:locale", content: "pt_BR" }
  ]
}

const title = "nossovoto - Blog";

const keywords = {
  name: "keywords",
  content: "blog, nossovoto, educação politica, politica, educação"
};

const description = {
  name: "description",
  content: "Aprenda o funcionamento da Política Brasileira sem juridiquês. Aqui nós falamos a sua língua. Sem enrolação e direto ao ponto."
};

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={keywords.name} content={keywords.content} key={keywords.name} />
        <meta name={description.name} content={description.content} key={description.name} />
        {facebookProperties().map(property => (
          <meta property={property.property} content={property.content} key={property.property} />
        ))}
      </Head>
      <BlogBanner />
      <BlogBox posts={posts} />
    </>
  )
};

Blog.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts: posts };
};

export default Blog;
