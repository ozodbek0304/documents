import { ReactNode } from "react";
import { DEFAULT_THEME } from "@/constants/theme";
import { ThemeProvider } from "next-themes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";
import { Toaster } from "@/components/ui/sonner";

interface LayoutProps {
  children: ReactNode;
}

const Providers = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider defaultTheme={DEFAULT_THEME}>
      <Toaster/>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};

export default Providers;
