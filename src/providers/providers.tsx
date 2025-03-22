import { ReactNode } from "react";
import { DEFAULT_THEME } from "@/constants/theme";
import { ThemeProvider } from "next-themes";

interface LayoutProps {
  children: ReactNode;
}

const Providers = ({ children }: LayoutProps) => {
  return <ThemeProvider defaultTheme={DEFAULT_THEME}>{children}</ThemeProvider>;
};

export default Providers;
