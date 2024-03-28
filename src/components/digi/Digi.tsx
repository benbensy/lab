import { css } from "#/styled-system/css";
import { FC } from "react";

export const Digi: FC = () => {
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "full",
        p: '60px',
        bgColor: '#20204d'
      })}
    >

        {Array.from({ length: 4 }).map(() => (
          <div>
            <p>10 +</p>
            <p>YEARS OF EXPERIENCES</p>
          </div>
        ))}
    </div>
  );
};
