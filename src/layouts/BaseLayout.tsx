import { css } from "#/styled-system/css";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { FC, PropsWithChildren } from "react";

export const BaseLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div
      className={css({
        width: "full",
        height: "full",
      })}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};
