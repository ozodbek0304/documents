import { ReactNode, useEffect, useState } from "react";
import Header from "../header";
import Footer from "../footer";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {

  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-slate-900 to-blue-900">
  //       <div className="flex flex-col items-center">
  //         <div className="mb-4 h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-blue-200"></div>
  //         <p className="text-blue-200">Yuklanmoqda...</p>
  //       </div>
  //     </div>
  //   );
  // }

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
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
