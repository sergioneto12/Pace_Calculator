import React, { useState } from 'react';
//import imgLogo from '../Images/WebIcon.png';
import styled from 'styled-components';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <Nav>
            <Logo>
                <h1>Calculadora De Corrida</h1>
            </Logo>
            <Hamburguer onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </Hamburguer>

            <Bar isOpen={isOpen}>
                <MenuLink href='/'>Calculadora</MenuLink >
                <MenuLink href='/about-calculator'>Por que usar?</MenuLink>
                <MenuLink href='/about'>Sobre</MenuLink>
            </Bar>
        </Nav>
    );
}

//Menu
const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: #199e82;
`;

const Logo = styled.div`
    padding: 0.5% 0;
    width: 40%;
    text-align: left;
    display: flex;

    h1 {
        font-family: 'sans-serif';
        font-size: 130%;
        color: white;
    }

    @media (max-width: 999px) {
        padding: 0.5% 0;
        width: 20%;
        text-align: left;
        display: flex;

    h1 {
        font-family: 'sans-serif';
        font-size: 90%;
        color: white;
    }
    }
`;

const Hamburguer = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin: center;

    span {
        height: 4px;
        width: 30px;
        background: white;
        margin-bottom: 12%;
        border-radius: 4%;
        margin-left: 20%;
    }

    @media (max-width: 1000px) {
        display: flex;
    }
`;

const Bar = styled.div`
    display: flex;
    justify-content: center;
    align-items: right;
    position: relative;

    overflow: hidden;
    flex-direction: row;
    width: 100%;
    max-height: ${({isOpen}) => (isOpen ? "300px" : "0")};
    transition: all 1s ease;


    @media (max-width: 1000px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({isOpen}) => (isOpen ? "300px" : "0")};
    }
`;

const MenuLink = styled.a`
    padding: 1% 0.6rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease-in;
    font-weight: bold;
    font-size: 110%;
    font-family: 'Roboto';

    &:hover{
     //color: #badcf5;
     color: #cc2d2d;
    }
`;

export default Menu;


