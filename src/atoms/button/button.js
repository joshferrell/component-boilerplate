import sys from 'system-components';
import { lighten } from 'polished';

import colors from '../../theme/colors';

const Button = sys(
    {
        is: 'button',
        display: 'inline-flex',
        fontSize: 2,
        py: 3,
        px: 4,
        border: 0,
        borderRadius: 3,
        fontFamily: 'poppins',
        letterSpacing: '1px'
    },
    ({ type }) => {
        const { bg, color } = colors.types[type];

        return `
            color: ${color};
            background-color: ${bg};

            &:hover {
                background-color: ${lighten(0.08, bg)};
            }
            &:active {
                background-color: ${bg};
            }
        `;
    }
);

export default Button;
