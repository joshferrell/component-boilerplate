import { injectGlobal } from 'styled-components';
import { fontFace, normalize } from 'polished';

injectGlobal`
    ${normalize()};

    @import url('https://fonts.googleapis.com/css?family=Poppins:400,400i,500,700');

    * {
        font-family: Poppins, sans-serif;
    }
`;
