import styled from 'styled-components';
import { Button } from '.';
import { defaultProps } from 'recompose';

const ButtonLink = styled(Button).attrs({
    is: 'a'
})`
    text-decoration: none;
`;

export default ButtonLink;
