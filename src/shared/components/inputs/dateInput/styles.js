import styled from 'styled-components';

import { colors } from '../../../functions/colors';

export const Container = styled.div`
    border: 1px solid ${colors.grey100};
    background-color: ${colors.white};
    height: 56px;
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
`;

export const BoxDate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    width: calc(100% - 96px);
`;

export const Month = styled.p`
    font-family: Work Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.1666666716337204px;
    text-align: center;
    color: ${colors.text};
`;

export const Year = styled.p`
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
    color: ${colors.text};
`;
