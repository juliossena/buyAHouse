import styled from 'styled-components';

import { colors } from '../../../shared/functions/colors';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Info = styled.h2`
    margin: 40px auto;

    font-family: Work Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: -0.20000000298023224px;

    color: ${colors.primary};

    strong {
        font-weight: 600;
    }

    @media (max-width: 560px) {
        font-size: 18px;
        margin: 24px auto;
    }
`;

export const Box = styled.div`
    border-radius: 8px;
    max-width: 560px;
    width: 100%;
    background-color: ${colors.white};
    padding: 40px;
    margin: auto;
    border: 1px solid ${colors.grey100};

    @media (max-width: 560px) {
        padding: 30px;
    }
`;

export const Img = styled.img`

    @media (max-width: 560px) {
        width: 24px;
    }
`;

export const Title = styled.h1`
    font-family: Work Sans;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: -0.2666666805744171px;
    text-align: left;
    color: ${colors.text};

    @media (max-width: 560px) {
        font-size: 24px;
    }
`;

export const SubTitle = styled.h3`
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;

    color: ${colors.textLight};

    @media (max-width: 560px) {
        font-size: 14px;
    }
`;

export const BoxButton = styled.div`
    max-width: 400px;
    margin: auto;
`;
