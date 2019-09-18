import Header from "./header";
import Nav from "./nav";
import Footer from "./footer";

const Layout = props => (
  <div>
    <Header />
    <style jsx global>{`
      body {
        margin: 0;
      }
    `}</style>
    <Nav />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
