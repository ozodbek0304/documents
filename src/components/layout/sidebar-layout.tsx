import React from "react";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { AppSidebar } from "../sidebar/app-sidebar";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/router";

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  const { push } = useRouter();
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16  px-4 shrink-0 items-center gap-2 justify-between transition-[width,height] ease-linear ">
          <div className="flex items-center gap-2 ">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard">
                    Boshqaruv paneli
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <Button
            onClick={() => push("/document-create")}
            variant={"default"}
            className="cursor-pointer"
          >
            <Plus />
            Mahsulot qo'shish
          </Button>
        </header>
        <main className="flex flex-1 flex-col gap-3 p-4 pt-0">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default SidebarLayout;
