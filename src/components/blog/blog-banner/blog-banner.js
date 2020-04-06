import "./blog-banner.scss";


const BlogBanner = () => {

  const handleClick = () => {
    const newsletterDiv = document.getElementById("newsletter-blog");
    if (newsletterDiv) newsletterDiv.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="blog-banner">
      <h1>Blog de política do nossovoto</h1>
      <div className="blog-banner-button-box">
        <span>Assine nossa <br /> newsletter semanal</span>
        <button onClick={handleClick}>
          Assinar
        </button>
      </div>
    </div>
  )
};

export default BlogBanner;