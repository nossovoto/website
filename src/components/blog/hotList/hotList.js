import Link from "next/link";
import { formatDate } from "../../../../public/js/util";
import "./hotList.scss";

const PostHotList = ({ posts }) => {
  posts = posts.sort(function (a, b) {
    if (a.views > b.views) return -1;
    else if (a.views < b.views) return 1;
    return 0;
  });

  return (
    <div className="blog-posts-hot">
      <div className="blog-posts-hot-box">
        <h1>Mais Acessados</h1>
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
              <div className="blog-posts-hot-post">
                <h3>{post.title}</h3>
                <span>
                  por <a>{post.author ? post.author : "nossovoto"}</a> em {data}
                </span>
                <span>{post.views ? post.views : 0} visualizações</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PostHotList;
