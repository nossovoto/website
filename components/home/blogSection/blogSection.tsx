import SlideShow from "../../slideShow/slideShow"
import "./blogSection.scss"

const BlogSection = ({ posts }) => (
  <section className="blog-section">
    <h3>
      Acesse nosso blog e aprenda sobre política de uma forma simples e direta
      ao ponto:
    </h3>
    <h5>Posts mais recentes.</h5>
    <div className="blog-section-carousel">
      <SlideShow posts={posts} />
    </div>
  </section>
)

export default BlogSection
