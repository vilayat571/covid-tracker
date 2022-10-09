import { memo, ReactNode } from "react";
import { MainLayout } from "../styled/MainLayout.styled";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <MainLayout>{children}</MainLayout>;
}

export default memo(Layout);
