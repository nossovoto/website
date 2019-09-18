import "../../static/css/home/blog-section.scss";
import Link from "next/link";

const BlogSection = props => (
  <section className="blog-section">
    <h3>
      Acesse nosso blog e aprenda sobre política de uma forma simples e direto
      ao ponto:
    </h3>
    <h5>Posts mais recentes.</h5>
    <div className="carousel">
      {props.posts
        ? props.posts.map(post => (
            <Link
              href="/post/[id]"
              as={`/post/${post.slug}`}
              key={post.id}
              passHref
            >
              <img src={post.img_url} alt={post.title} />
            </Link>
          ))
        : null}
    </div>
  </section>
);

export default BlogSection;
