import Nav2 from './navbar/Nav2'
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col space-between">
      <Nav2 />
      <main className="relative flex-grow min-h-screen-foot">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
