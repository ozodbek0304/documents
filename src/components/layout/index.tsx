import { ReactNode } from "react";
import Header from "../header";
import { DEFAULT_THEME } from "@/constants/theme";
import Footer from "../footer";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider defaultTheme={DEFAULT_THEME}>
      <div className="flex flex-col min-h-screen pt-[52px]">
        <Head>
          <title>My Nextjs Template</title>
          <meta name="description" content="This site is a template for nextjs website" />
        </Head>
        <Header />
        <main className="flex-grow container mx-auto lg:p-0 px-3 ">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
