import styled from 'styled-components';

export const Container = styled.div`
    padding: 56px 152px;

    @media (max-width: 560px) {
        padding: 16px;
    }
`;

export const BoxButtons = styled.div`
    margin: -8px;
    display: flex;
    flex-wrap: wrap;
`;

export const H1 = styled.h1`
    font-family: Work Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 30px;
`;
