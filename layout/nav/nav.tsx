import Link from "next/link"
import { useRouter } from "next/router"
import style from "./nav.module.scss"

const Nav = () => {
  const router = useRouter()
  return (
    <>
      <div className={style.main}>
        <Link href="/" passHref>
          <picture >
            <source media="(max-width: 720px)" srcSet="/static/images/logo_brasao.png" type="image/png" />
            <source srcSet="/static/images/logo_home.png" type="image/png" />
            <img className={style.logo} src="/static/images/logo_home.png" alt="logo" />
          </picture>
        </Link>
        <div className={style.menu}>
          <Link href="/">
            <a className={router.pathname === "/" ? style.active : undefined}>Home</a>
          </Link>
          <div className={style.separator}> </div>
          <Link href="/blog">
            <a className={router.pathname === "/blog" ? style.active : undefined}>Blog</a>
          </Link>
          <div className={style.separator}> </div>
          <div className={style.acessar_app_button}
            onClick={() => window.open('https://app.nossovoto.com.br', '_blank')}>
            Acessar App
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
