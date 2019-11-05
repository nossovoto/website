import BlogBanner from "../../components/blog/banner/banner";
import PostContainer from "../../components/blog/post/post";
import { getPost } from "../../../public/js/getPosts";
import draftToHtml from "draftjs-to-html";

const Post = ({ post }) => (
  <>
    <BlogBanner />
    <PostContainer post={post} />
  </>
);

Post.getInitialProps = async function(context) {
  const { slug } = context.query;
  let post = await getPost(slug);
  post.text = draftToHtml(JSON.parse(post.text));

  return { post: post };
};

export default Post;
