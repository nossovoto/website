import Nav from "./nav/nav";
import Footer from "./footer/footer";
import BackToTop from "../components/backToTop/backToTop";

const Layout = props => (
  <>
    <Nav />
    {props.children}
    <Footer />
    <BackToTop />
  </>
);

export default Layout;
