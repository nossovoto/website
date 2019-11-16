import "./post.scss";
import SocialBox from "../../socialBox/socialBox";

const PostContainer = ({ post, currentUrl }) => (
  <>
    <div className="blog-post-page">
      <div className="blog-post-social">
        <SocialBox currentUrl={currentUrl} />
      </div>
      <div className="blog-post-container">
        <h1>{post.title}</h1>
        <img src={post.thumbnail} />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.text }}
        ></div>
      </div>
    </div>
    <div className="blog-post-author-separator">
      <h2>
        <span>Autor</span>
      </h2>
    </div>
    <div className="blog-post-author">
      <div className="blog-post-author-img"></div>
      <div className="blog-post-author-name">
        Escrito por <a>{post.author}</a>
      </div>
    </div>
  </>
);

export default PostContainer;
