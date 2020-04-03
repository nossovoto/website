import PostList from "../postList/postList";

import "./blog-box.scss";

const BlogBox = ({ posts }) => (
  <PostList posts={posts} />
);

export default BlogBox;