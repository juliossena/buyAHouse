import styled from 'styled-components';

import { colors } from '../../../../shared/functions/colors';

export const Container = styled.div`
    width: 100%;
    display: flex;
    margin: 40px 0px;
    flex-wrap: wrap;
`;

export const Amount = styled.div`
    width: 233px;
    margin: 0px auto 0px 0px;

    @media (max-width: 560px) {
        width: 100%;
        margin-bottom: 16px;
    }
`;

export const Date = styled.div`
    width: 233px;
    margin: 0px 0px 0px auto;

    @media (max-width: 560px) {
        width: 100%;
    }
`;

export const InfoBox = styled.h2`
    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: ${colors.text};
    margin-bottom: 4px;
`;
