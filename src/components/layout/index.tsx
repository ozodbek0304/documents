import { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";
import Head from "next/head";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { query } = useRouter();

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
      <div className="container mx-auto mt-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/dashboard">Asosiy sahifa</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>{query?.slug}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
