import "./list.scss";
import Link from "next/link";
import { getIntFromDate, formatDate } from "../../../../public/js/util";

const PostList = ({ posts }) => {
  posts = posts.sort(function (a, b) {
    const dateA = getIntFromDate(a.createdAt);
    const dateB = getIntFromDate(b.createdAt);
    if (dateA > dateB) return -1;
    else if (dateA < dateB) return 1;
    return 0;
  });

  return (
    <>
      <div className="blog-posts-list">
        {posts.map((post, key) => {
          let data = formatDate(post.createdAt);
          return (
            <Link
              key={key}
              href="/post/[slug]"
              as={`/post/${post.slug}`}
              passHref
              prefetch={false}
            >
              <div className="blog-post">
                <div className="blog-post-img">
                  <img src={post.thumbnail} />
                </div>
                <div className="blog-post-list-content">
                  <h1>{post.title}</h1>
                  <span className="blog-post-list-content-sumary">
                    {post.summary}
                  </span>
                  <span className="blog-post-list-content-extra">
                    Por <a>{post.author ? post.author : "nossovoto"}</a> - {data}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="blog-posts-list-after"></div>
    </>

  );
};

export default PostList;
