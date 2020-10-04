import styled from 'styled-components';

import { colors } from '../../functions/colors';

export const Container = styled.button`
    background: ${colors.primary};
    color: ${colors.white};
    border-radius: 32px;
    height: 56px;
    width: 100%;
    cursor: pointer;
    
    font-family: Work Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0px;
`;

export default Container;
