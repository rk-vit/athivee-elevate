import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main>{children}</main>
      <Footer />

    </div>
  );
};

export default Layout;
