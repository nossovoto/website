import GetPosts from "../../static/js/getPostExample";

// pages/posts.js

const Post = props => (
  <div>
    <h1>{props.post.title}</h1>
    {/* <p>{props.post.summary.replace(/<[/]?p>/g, "")}</p> */}
    <img src={props.post.img_url} />
  </div>
);

Post.getInitialProps = async function(context) {
  const { slug } = context.query;
  const posts = GetPosts();
  let post = posts.find(post => post.slug == slug);

  // console.log(context.query);
  // console.log(post);

  return { post };
};

export default Post;
