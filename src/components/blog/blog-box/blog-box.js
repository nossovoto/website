import PostList from "../list/list";
import PostHotList from "../hotList/hotList";
import SocialBox from "../../socialBox/socialBox";
import "./blog-box.scss";

const BlogBox = ({ posts, currentUrl }) => (
  <div className="blog-box">
    <div className="blog-margin">
      <SocialBox currentUrl={currentUrl} />
    </div>
    <PostList posts={posts} />
    <PostHotList posts={posts} />
  </div>
);

export default BlogBox;
