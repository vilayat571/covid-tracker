import { ReactNode } from "react";
import { useSelector } from "react-redux";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  const theme: boolean = useSelector(
    (state: any) => state.themeSwitchReducer.theme
  );

  return (
    <div className={`flex ${theme ? "bg-[#f3f4f6]" : "bg-[#131313]"}`}>
      {children}
    </div>
  );
}

export default Layout;
