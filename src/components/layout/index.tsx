import { PropsWithChildren } from "react";
import Header from "./Header";
import { Page } from "@/types/page";
import Footer from "./Footer";

const Layout: React.FC<PropsWithChildren & { data: Page }> = ({
  children,
  data,
}) => {
  return (
    <main>
      <Header data={data?.head_menu} />
      {children}
      <Footer data={data?.footer} />
    </main>
  );
};

export default Layout;
