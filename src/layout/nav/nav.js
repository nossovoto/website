import Link from "next/link";
import { useRouter } from "next/router";
import "./nav.scss";

const Nav = () => {
  const router = useRouter();
  return (
    <>
      <div className="nav">
        <Link href="/" passHref>
          <img
            className="logo"
            src="/static/images/logo_brasao.png"
            alt="logo"
          />
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
          <a href="https://app.nossovoto.com.br" target="_blank">
            nossovoto
          </a>
        </div>
        <div className="quebra-logo"></div>
      </div>
    </>
  );
};

export default Nav;
