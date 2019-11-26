import BlogBanner from "../../components/blog/banner/banner";
import PostContainer from "../../components/blog/post/post";
import { getPost } from "../../../public/js/getPosts";
import draftToHtml from "draftjs-to-html";
import Head from 'next/head'

const facebookProperties = (post, currentUrl) => {
  return [
    { property: "og:url", content: currentUrl },
    { property: "og:type", content: "article" },
    { property: "og:title", content: post.title },
    { property: "og:description", content: post.text.substring(0, 180) },
    { property: "og:image", content: post.thumbnail },
    { property: "og:locale", content: "pt_BR" }
  ]
}

const Post = ({ post, currentUrl }) => (
  <>
    <Head>
      <meta name="keywords" content={post.keywords} key="keywords" />
      <meta name="description" content={post.title} key="description" />
      {facebookProperties(post, currentUrl).map(property => (
        <meta property={property.property} content={property.content} key={property.property} />
      ))}
    </Head>
    <BlogBanner />
    <PostContainer post={post} currentUrl={currentUrl} />
  </>
);

Post.getInitialProps = async ({ req, query }) => {
  const { slug } = query;
  const host = req ? req.headers.host : "nossovoto.com.br";
  const path = req ? req.url : "/post/";
  const currentUrl = "https://" + host + path + (req ? "" : slug);
  let post = await getPost(slug);
  post.text = draftToHtml(JSON.parse(post.text));
  return { post: post, currentUrl: currentUrl };
};

export default Post;
