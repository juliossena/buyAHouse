import styled from 'styled-components';

import { colors } from '../../../../shared/functions/colors';

export const Container = styled.div`
    border: 1px solid #E1E8ED;
    box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
    border-radius: 4px;
    width: 100%;
    margin-bottom: 30px;
`;

export const BoxAmount = styled.div`
    display: flex;
    padding: 32px;
    flex-wrap: wrap;
    align-items: center;

    @media (max-width: 560px) {
        padding: 20px;
    }
`;

export const TextAmount = styled.p`
    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    margin: 0px auto 0px 0px;
    color: ${colors.text};

    @media (max-width: 560px) {
        font-size: 16px;
    }
`;

export const Amount = styled(TextAmount)`
    font-size: 40px;
    line-height: 32px;
    margin: 0px 0px 0px auto;
    color: ${colors.primaryLight};

    @media (max-width: 560px) {
        font-size: 26px;
    }
`;

export const BoxMessage = styled.div`
    padding: 16px 32px;
    background-color: ${colors.grey50};
    border-radius: 0px 0px 4px 4px;

    @media (max-width: 560px) {
        padding: 16px 24px;
    }
`;

export const Paragraph = styled.p`
    font-family: Work Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;

    strong {
        font-weight: 600;
    }
`;
