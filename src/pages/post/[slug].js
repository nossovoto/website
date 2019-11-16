import BlogBanner from "../../components/blog/banner/banner";
import PostContainer from "../../components/blog/post/post";
import { getPost } from "../../../public/js/getPosts";
import draftToHtml from "draftjs-to-html";

const Post = ({ post, currentUrl }) => (
  <>
    <BlogBanner />
    <PostContainer post={post} currentUrl={currentUrl} />
  </>
);

Post.getInitialProps = async ({ req, query }) => {
  const { slug } = query;
  const host = req ? req.headers.host : "nossovoto.com.br";
  const path = req ? req.url : "/slug";
  const currentUrl = "https://" + host + path + (req ? "" : slug);
  let post = await getPost(slug);
  post.text = draftToHtml(JSON.parse(post.text));
  return { post: post, currentUrl: currentUrl };
};

export default Post;
