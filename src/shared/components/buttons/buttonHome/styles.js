import styled from 'styled-components';

import { colors } from '../../../functions/colors';

export const Container = styled.div`
    background: ${colors.white};
    border: 1px solid ${colors.grey100};
    box-shadow: 0px 4px 8px rgba(150, 164, 176, 0.1);
    border-radius: 12px;
    width: 272px;
    height: 208px;
    margin: 8px;
    padding: 32px;
    text-align: center;

    @media (max-width: 560px) {
        width: 152px;
        height: 176px;
        padding: 16px 8px;
    }
`;

export const Text = styled.h2`
    font-family: Work Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    width: 100%;
    margin-bottom: 4px;
    color: ${colors.text};

    @media (max-width: 560px) {
        font-size: 14px;
        height: 36px;
        line-height: 16px;
    }
`;

export const Icon = styled.img`
`;

export const Value = styled.p`
    font-family: Work Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 22px;
    color: ${colors.primary};
`;

export const SubText = styled.h3`
    font-family: Work Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 17px;
    color: ${colors.grey800};
`;

export const Month = styled.h2`
    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: ${colors.grey900};
`;
