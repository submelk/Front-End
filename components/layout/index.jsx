import { useRouter } from "next/router";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <Header />
      {children}
      {!["/login", "/login/forget", "/register"].includes(pathname) && (
        <Footer />
      )}
    </>
  );
};

export default Layout;
