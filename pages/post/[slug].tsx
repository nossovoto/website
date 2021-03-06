import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import draftToHtml from "draftjs-to-html"
import { IPostProps, IPost } from 'model/post'
import BlogBanner from "components/blog/blog-banner/blog-banner"
import PostContainer from "components/blog/post/post"
import NewsletterBlog from 'components/blog/newsletterBlog/newsletterBlog'
import Disqus from 'components/disqus/disqus'
import { NOSSOVOTO_URL } from '../../util/consts'
import { getPost, getPosts } from '../../util/getPosts'
import { replaceAccents } from '../../util/util'

const facebookProperties = (post: IPost, currentUrl: string) => {
  return [
    { property: "og:url", content: currentUrl },
    { property: "og:type", content: "article" },
    { property: "og:title", content: post.title },
    { property: "og:description", content: post.description },
    { property: "og:image", content: post.thumbnail },
    { property: "og:locale", content: "pt_BR" }
  ]
}

const Post: NextPage<IPostProps> = ({ post }) => {

  const { asPath, isFallback, push } = useRouter()
  const currentUrl = NOSSOVOTO_URL + asPath

  if (isFallback)
  {
    return (
      <div>Loading...</div>
    )
  }

  if (!post)
  {
    return (
      <>
        <Head>
          <meta key={"robots"} name="robots" content="noindex" />
        </Head>
        <div>Esta página não existe, você será redirecionado para home.</div>
        {push('/')}
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="keywords" content={post.keywords} key="keywords" />
        <meta name="description" content={post.description} key="description" />
        {facebookProperties(post, currentUrl).map(property => (
          <meta property={property.property} content={property.content} key={property.property} />
        ))}
      </Head>
      <BlogBanner />
      <PostContainer post={post} />
      <Disqus url={currentUrl} identifier={post.slug} title={replaceAccents(post.title)} />
      <NewsletterBlog withIcon />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  const posts = await getPosts()
  const paths = posts.map(post => `/post/${post.slug}`)

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post: any = await getPost(`${params.slug}`)
  post.text = draftToHtml(JSON.parse(post.text))

  return {
    props: { post }
  }
}

export default Post
