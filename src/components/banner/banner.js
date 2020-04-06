import "./banner.scss";

const Banner = () => (
  <section className="banner">
    <picture>
      <source srcSet="/static/images/banner_home.webp" type="image/webp" />
      <source srcSet="/static/images/banner-home.png" type="image/png" />
      <img src="/static/images/banner-home.png" alt="banner" />
    </picture>
  </section>
);

export default Banner;