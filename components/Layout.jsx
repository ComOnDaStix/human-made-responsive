import Navbar from "./Navbar";
import Footer from "./Footer";
import HeaderMenu from "./HeaderMenu";
import SubFooter from "./SubFooter";



export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <HeaderMenu />
      <main>{children}</main>
      <Footer />
      <SubFooter />
    </div>
  );
}