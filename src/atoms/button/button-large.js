import styled from 'styled-components';
import { defaultProps } from 'recompose';
import { Button, ButtonLink } from '.';

const largeProps = {
    fontSize: [2, 3],
    py: [3, '24px']
};

export const ButtonLarge = defaultProps(largeProps)(Button);
export const ButtonLargeLink = defaultProps(largeProps)(ButtonLink);
