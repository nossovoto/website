import Link from "next/link";
import { useRouter } from "next/router";
import "./nav.scss";

const Nav = () => {
  const router = useRouter();
  return (
    <>
      <div className="nav">
        <Link href="/" passHref>
          <picture >
            <source media="(max-width: 720px)" srcSet="/static/images/logo_brasao.png" type="image/png" />
            <source srcSet="/static/images/logo_home.png" type="image/png" />
            <img className="logo" src="/static/images/logo_home.png" alt="Camara" />
          </picture>
        </Link>
        <div className="nav-menu">
          <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
          </Link>
          <div className="nav-separator"> </div>
          <Link href="/blog">
            <a className={router.pathname === "/blog" ? "active" : ""}>Blog</a>
          </Link>
          <div className="nav-separator"> </div>
          <div className="acessar-app-button" onClick={() => onclick = window.open('https://app.nossovoto.com.br', '_blank')}>
            Acessar App
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
