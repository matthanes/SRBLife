import Nav from "./Nav";
import Nav2 from "./Nav2";

const Layout = ({ children }) => {
  return (
    <>
      <Nav2 />
      <main className="mx-auto">{children}</main>
    </>
  );
};

export default Layout;
