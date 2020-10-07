import styled from 'styled-components';

import { colors } from '../../../functions/colors';

export const Container = styled.div`
    border: 1px solid ${colors.grey100};
    background-color: ${colors.white};
    height: 56px;
    display: flex;
    border-radius: 4px;
`;

export const BoxPrefix = styled.div`
    border-radius: 4px 0px 0px 4px;
    height: 56px;
    width: 56px;
    background-color: ${colors.grey100};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Prefix = styled.div`
    color: ${colors.textLight};
    
`;

export const Input = styled.input`
    width: 100%;
    border: none;
    padding: 16px;

    font-family: Work Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
`;
