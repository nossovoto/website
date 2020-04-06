import Head from "next/head";
import BlogBanner from "../components/blog/blog-banner/blog-banner";
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

const meta = {
  title: "nossovoto - Blog",
  keywords: "blog, nossovoto, educação politica, politica, educação",
  description: "Aprenda o funcionamento da Política Brasileira sem juridiquês. Aqui nós falamos a sua língua. Sem enrolação e direto ao ponto."
};

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name={Object.keys(meta)[1]} content={meta.keywords} key={Object.keys(meta)[1]} />
        <meta name={Object.keys(meta)[2]} content={meta.description} key={Object.keys(meta)[2]} />
        {facebookProperties().map(property => (
          <meta property={property.property} content={property.content} key={property.property} />
        ))}
      </Head>
      <BlogBanner />
      <BlogBox posts={posts} />
    </>
  )
};

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
  }
};

export default Blog;
