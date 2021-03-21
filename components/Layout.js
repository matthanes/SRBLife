import Nav from "./Nav";
import Nav2 from "./Nav2";
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col space-between">
      <Nav2 />
      <main className="flex-grow min-h-screen-foot">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
