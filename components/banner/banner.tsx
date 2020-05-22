import style from "./banner.module.scss"

const Banner = () => (
  <section className={style.main}>
    <picture>
      <source srcSet="/static/images/banner_home.webp" type="image/webp" />
      <source srcSet="/static/images/banner-home.png" type="image/png" />
      <img src="/static/images/banner-home.png" alt="banner" />
    </picture>
  </section>
)

export default Banner
