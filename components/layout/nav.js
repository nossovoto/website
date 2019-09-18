import Link from "next/link";
import "../../static/css/nav.scss";

const Nav = () => (
  <div className="nav">
    <Link href="/">
      <img className="logo" src="/static/images/logo_brasao.png" />
    </Link>
    <div className="nav-menu">
      <Link href="/">
        <a>Home</a>
      </Link>
      <div className="nav-separator"> </div>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <div className="nav-separator"> </div>
      <Link href="/nossovoto">
        <a>nossovoto</a>
      </Link>
    </div>
    <div className="quebra-logo"></div>
  </div>
);

export default Nav;
