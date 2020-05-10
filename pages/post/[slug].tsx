import { NextPage, GetServerSideProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { IPostProps, IPost } from '../../model/post'
import BlogBanner from "../../components/blog/blog-banner/blog-banner"
import PostContainer from "../../components/blog/post/post"
import { useRouter } from 'next/router'
import draftToHtml from "draftjs-to-html"
import NewsletterBlog from '../../components/blog/newsletterBlog/newsletterBlog'
import Disqus from '../../components/disqus/disqus'
import { getPost, getPosts } from '../../util/getPosts'

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



const Post: NextPage<IPostProps> = ({ post }) => {

  const { asPath } = useRouter()
  const currentUrl = URL + asPath

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
      <Disqus url={currentUrl} identifier={post.slug} title={post.title} />
    </>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {

//   const posts = await getPosts()
//   const paths = posts.map(post => post.slug)

//   return {
//     paths,
//     fallback: true
//   }
// }

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params

  // TODO is it working??
  const post: any = await getPost(slug.toString())
  post.text = draftToHtml(JSON.parse(post.text))

  return {
    props: { post }
  }
}

export default Post
