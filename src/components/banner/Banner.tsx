import { css } from "#/styled-system/css";
import { FC } from "react";

export const Banner: FC = () => {
    return <div className={css({
        width: '100%',
        height: 757,
    })}>
        <div className={css({
            display: 'flex',
            flexDir: 'column',
            color: '#cccccc',
            pt: 100,
            pl: 30
        })}>
            <p className={css({
                fontSize: 68,
                maxWidth: 68 * 6,
                fontWeight: 900,
            })}>Mollitia, sit excepturi! Aliquam! </p>
            <p className={css({
                fontSize: 20,
                maxWidth: 20 * 26,
                fontWeight: 500,
            })}>Fuga perspiciatis nulla rem in provident! Vitae, dolore quibusdam culpa corporis ut blanditiis? </p>
        </div>
    </div>
}