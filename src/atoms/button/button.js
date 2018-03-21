import PropTypes from 'prop-types';

import { lighten } from 'polished';
import styled from 'styled-components';
import { fontSize, space, color, hover, active, theme } from 'styled-system';
import system from 'system-components';

import colors from '../../theme/colors';

const largeButton = {
    fontSize: [2, 3],
    py: [3, '24px']
};

const regularButton = {
    fontSize: 2,
    py: 3
};

const buttonColors = type => ({
    color: colors.types[type].color,
    bg: colors.types[type].bg,

    hover: ({
        backgroundColor: lighten(0.08, colors.types[type].bg)
    }),
    active: ({
        backgroundColor: colors.types[type].bg
    })
});

const buttonStyles = (props) => ({
    is: 'button',

    px: 4,
    border: 0,

    ...(props.large ? largeButton : regularButton),
    ...buttonColors(props.type)
});

const defaultStyles = buttonStyles({ large: false, type: 'primary' });

const Button = styled(
    system(defaultStyles)
).attrs(props => buttonStyles(props))``;

Button.propTypes = {
    type: PropTypes.oneOf(Object.keys(colors.types)),
    large: PropTypes.bool
};

Button.defaultProps = {
    large: false,
    type: 'primary'
};

export default Button;
