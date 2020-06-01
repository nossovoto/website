import style from "./blog-banner.module.scss"

const BlogBanner = () => {

  const handleClick = () => {
    const newsletterDiv = document.getElementById("newsletter-blog")
    if (newsletterDiv) newsletterDiv.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <div className={style.main}>
      <h1>Blog de política do nossovoto</h1>
      <div className={style.button_box}>
        <span>Receba nossos<br />artigos em seu e-mail</span>
        <button onClick={handleClick}>
          Cadastre-se
        </button>
      </div>
    </div>
  )
}

export default BlogBanner