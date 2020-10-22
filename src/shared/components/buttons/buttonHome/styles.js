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
`;

export const Text = styled.h2`
    font-family: Work Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 24px;
    text-align: center;
    width: 100%;
    colors: ${colors.text};
`;

export const Icon = styled.img`
    margin: auto;
`;
