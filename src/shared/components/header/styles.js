import styled from 'styled-components';

import { colors } from '../../functions/colors';

export const Container = styled.header`
    height: 79px;
    width: 100%;
    background-color: ${colors.white};
    display: flex;
    align-items: center;
    padding-left: 37px;
    margin-bottom: 14px;

    @media (max-width: 560px) {
        height: 56px;
        margin-bottom: 0px;
        padding-left: 16px;
    }
`;

export const Icon = styled.img`

    @media (max-width: 560px) {
        width: 65px;
    }
`;
