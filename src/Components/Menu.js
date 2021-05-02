import React, { useState } from 'react';
//import imgLogo from '../Images/WebIcon.png';
import {Nav, Logo, Hamburguer, Bar, MenuLink} from '../Styles/stylesheet';

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
                {/* <MenuLink href='/map'>Mapa & Calculadora</MenuLink> */}
            </Bar>
        </Nav>
    );
}

export default Menu;


