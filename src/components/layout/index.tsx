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
  const { pathname, query } = useRouter();


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
      {pathname !== "/" && pathname !== "/search" && (
        <div className="container mx-auto sm:p-0 px-3 sm:mt-5 mt-4">
          <Breadcrumb>
            <BreadcrumbList className="flex items-center flex-nowrap ">
              <BreadcrumbItem className="whitespace-nowrap">
                <BreadcrumbLink href="/dashboard">Asosiy sahifa</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="line-clamp-1">
                <BreadcrumbPage>{query?.slug}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      )}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
