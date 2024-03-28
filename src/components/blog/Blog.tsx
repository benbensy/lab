import { css } from "#/styled-system/css";
import { FC } from "react";

export const Blog: FC = () => {
  return (
    <div
      className={css({
        px: "30px",
        boxSizing: 'border-box',
        width: 'full'
      })}
    >
      <p>Latest Blog</p>
      <p>Latest Blog</p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum impedit
        quaerat aliquid quibusdam aperiam vel ad ullam, velit, rerum officiis
        rem eius. Dignissimos quis alias, doloremque ea sequi eligendi libero!
      </p>
      <br />
      <br />
      <div
        className={css({
          display: "grid",
          gap: 100,
          justifyContent: 'space-between',
          gridTemplateColumns: 'repeat(3, 1fr)',
          w: 'full'
        })}
      >
        {Array.from({ length: 3 }).map(() => (
          <div className={css({
            w: 300,
            h: 300,
            bgColor: 'white'
          })}></div>
        ))}
      </div>
    </div>
  );
};
