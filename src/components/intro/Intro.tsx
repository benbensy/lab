import { css } from "#/styled-system/css";
import { FC } from "react";

export const Intro: FC = () => {
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "space-around",
        px: 10,
        gap: 100
      })}
    >
      <div className={css({
        width: 500,
        bgColor: 'white'
      })}>Image</div>
      <div>
        <p>About Company</p>
        <p>About Company</p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum impedit quaerat aliquid quibusdam aperiam vel ad ullam, velit, rerum officiis rem eius. Dignissimos quis alias, doloremque ea sequi eligendi libero!
        </p>
        <br /><br />
        <div
          className={css({
            display: "flex",
            gap: 150,
          })}
        >
          {Array.from({ length: 2 }).map(() => (
            <ul>
              {Array.from({ length: 6 }).map(() => (
                <li
                  className={css({
                    "&::before": {
                    content: '" ✓ "'
                    },
                  })}
                >
                  Assumenda pariatur ratione
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
