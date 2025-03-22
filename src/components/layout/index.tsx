import { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen pt-[52px]">
      <Head>
        <title>My Nextjs Template</title>
        <meta
          name="description"
          content="This site is a template for nextjs website"
        />
      </Head>
      <Header />
      <main className="flex-grow container mx-auto lg:p-0 px-3 ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
