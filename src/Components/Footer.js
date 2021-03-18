import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Main>
            <h1>Projeto sob supervisão e criação, Poá - SP</h1>
            <h2>Criado por InTec / 2021</h2>
        </Main>
    );
};

const Main = styled.div`
    text-align: center;
    font-size: 50%;
    width: 100%;
    background-color: #199e82;
    padding: 1% 0;
    margin-top: 3%;

    h1, h2 {
        color: white;
        margin: 1%
    }

    @media (max-width: 999px) {
        text-align: center;
        font-size: 50%;
        width: 100%;
        background-color: #199e82; 
        padding: 1% 0;
        margin-top: 0;
    }
`;

export default Footer;
