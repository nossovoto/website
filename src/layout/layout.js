import Header from "../components/header";
import Nav from "./nav/nav";
import Footer from "./footer/footer";

const Layout = props => (
  <>
    <Header />
    <Nav />
    {props.children}
    <Footer />
  </>
);

export default Layout;
