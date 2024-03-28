import { css } from "#/styled-system/css";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div
      className={css({
        columnCount: 3,
        height: 300,
        bgColor: "#4444ff",
      })}
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          className={css({
            fontSize: "50",
          })}
          key={index + ""}
        >
          {index}
        </div>
      ))}
    </div>
  );
};
