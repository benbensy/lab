import { FC } from "react";
import { css } from "#/styled-system/css";

export const Header: FC = () => {
  return (
    <div
      className={css({
        width: "full",
        height: 100,
        bgColor: "#353666",
        position: 'sticky',
        top: 0,
      })}
    >
    <div
      className={css({
        width: "full",
        maxWidth: 1280,
        height: 100,
        bgColor: "#353666",
        px: 5,
        display: "flex",
        placeContent: "space-between",
        placeItems: "center",
        margin: 'auto',
        position: 'sticky',
        top: 0,
      })}
    >
      <p className={css({
        color: 'white',
        fontSize: 50
      })}>Lorem</p>
      <div
        className={css({
          textAlign: "right",
          color: "#cccccc",
          lineHeight: 2.25,
          fontSize: 13
        })}
      >
        <p>Lorem ipsum dolor sit amet cupiditate accusamus.</p>
        <p>Adipisci suscipit doloremque incidunt.</p>
      </div>
    </div>
    </div>
  );
};
