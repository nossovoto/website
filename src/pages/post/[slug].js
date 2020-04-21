import Head from 'next/head'
import BlogBanner from "../../components/blog/blog-banner/blog-banner";
import PostContainer from "../../components/blog/post/post";
import { useRouter } from 'next/router'
import { URL } from '../../../public/js/util'
import { getPost } from "../../../public/js/getPosts";
import draftToHtml from "draftjs-to-html";
import NewsletterBlog from '../../components/blog/newsletterBlog/newsletterBlog';
import { DiscussionEmbed } from 'disqus-react';

const facebookProperties = (post, currentUrl) => {
  return [
    { property: "og:url", content: currentUrl },
    { property: "og:type", content: "article" },
    { property: "og:title", content: post.title },
    { property: "og:description", content: post.text.substring(0, 230) },
    { property: "og:image", content: post.thumbnail },
    { property: "og:locale", content: "pt_BR" }
  ]
}

const Post = ({ post }) => {

  const { asPath } = useRouter();
  const currentUrl = URL + asPath;
  const disqusShortName = post.title;
  const disqusConfig = {
    url: currentUrl,
    identifier: post.slug,
    title: post.title
  }
  return (
    <>
      <Head>
        <meta name="keywords" content={post.keywords} key="keywords" />
        <meta name="description" content={post.title} key="description" />
        {facebookProperties(post, currentUrl).map(property => (
          <meta property={property.property} content={property.content} key={property.property} />
        ))}
      </Head>
      <BlogBanner />
      <PostContainer post={post} />
      <NewsletterBlog withIcon />
      <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
    </>
  )
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  let post = await getPost(slug);
  post.text = draftToHtml(JSON.parse(post.text));

  return {
    props: { post }
  }
}

export default Post;