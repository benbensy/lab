import { css } from "#/styled-system/css";
import { FC } from "react";

export const Partner: FC = () => {
  return (
    <div className={css({
        pb: 20
    })}>
      客户
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "repeat(8, 120px)",
          gap: '5',
          justifyContent: 'center'
        })}
      >
        {Array.from({ length: 8 * 5 }).map(() => (
          <div className={css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          })}>
            <div
            className={css({
              w: 120,
              h: 120,
              bgColor:'white',
              borderRadius: 5,
            })}
          ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
