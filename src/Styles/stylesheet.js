import styled from 'styled-components';
import img from '../Images/running-1.jpg';
import backimg from '../Images/BGC_2.png';

//Menu
export const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: #213ab1;
`;

export const Logo = styled.div`
    padding: 0.5% 0;
    width: 40%;
    text-align: left;
    display: flex;

    h1 {
        font-family: 'Cabin';
        font-size: 130%;
        color: white;
    }

    @media (max-width: 999px) {
        padding: 0.5% 0;
        width: 20%;
        text-align: left;
        display: flex;

    h1 {
        font-family: 'Cabin';
        font-size: 90%;
        color: white;
    }
    }
`;

export const Hamburguer = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin: center;

    span {
        height: 4px;
        width: 40px;
        background: white;
        margin-bottom: 12%;
        border-radius: 15%;
        margin-left: 20%;
    }

    @media (max-width: 699px) {
        display: flex;

        span {
            height: 4px;
            width: 40px;
            background: white;
            margin-bottom: 12%;
            border-radius: 30%;
            margin-left: 20%;
        }
    }
`;

export const Bar = styled.div`
    //Esta opção pode ser ativada para criar um menu hamburguer, interativo mesmo em desktop.
    display: flex;
    justify-content: center;
    align-items: right;
    position: relative;

    overflow: hidden;
    flex-direction: row;
    width: 100%;
    max-height: ${({isOpen}) => (isOpen ? "300px" : "0")};
    padding: ${({isOpen}) => (isOpen ? "2px" : "0")};
    transition: all 0.7s ease; 

    @media (max-width: 699px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({isOpen}) => (isOpen ? "350px" : "0")};
        padding-bottom: ${({isOpen}) => (isOpen ? "20px" : "0")};
    }
`;

export const MenuLink = styled.a`
    padding: 2%;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease-in;
    font-weight: bold;
    font-size: 110%;
    font-family: 'Roboto';

    &:hover{
     color: #000000;
    }
`;

//Footer
export const FooterTag = styled.div`
    text-align: center;
    font-size: 50%;
    width: 100%;
    background-color: #213ab1;
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
        background-color: #213ab1; 
        padding: 1% 0;
        margin-top: 0;
    }
`;

//About Pages
export const Wrapper = styled.section`
  background-color: #d3dada;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Head = styled.div`
  text-align: center;
  width: 100%;
  height: 80vh;
  background-image: url(${img});
  background-size: 100%;
  background-position-y: 30%;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  padding-top: 1%;
  margin-bottom: -5%;

  @media (max-width: 999px) {
    text-align: center;
    width: 100%;
    height: 50vh;
    justify-content: center;
    align-items: center;
    padding-top: 1%;
    margin-bottom: 5%;

  }

  @media (max-width: 430px) {
    text-align: center;
    width: 100%;
    height: 20vh;
    justify-content: center;
    align-items: center;
    padding-top: 1%;
    margin-bottom: 5%;

  }
`;

export const TopLetter = styled.h1`
  margin-top: -5%;
  padding-bottom: 1%;
  padding-top: 5%;
  font-size: 175%;
  font-weight: 800;  
  font-family: 'Roboto';
  color: black;
  width: 100%;
  text-align: center;
  font-family: 'Cabin', sans-serif;
  border-bottom: 1px solid black;

  @media (max-width: 999px) {
    font-size: 175%;
    }
`;

export const Text  = styled.h1`  
  font-size: 120%;

  p {
    font-size: 90%;
    font-weight: 400;
    color: black;
    width: 100%;
    text-align: left;
    font-family: 'Cabin', sans-serif;
  }

  @media (max-width: 999px) {
    font-size: 120%;

    p {
      font-size: 80%; 
      font-family: 'Cabin', sans-serif;
      color: black;
      width: 100%;
      text-align: left;
    }

    @media (max-width: 430px) {
      font-size: 85%;

      p {
      font-size: 95%; 
      font-family: 'Arial';
      color: black;
      width: 100%;
      text-align: left;
    }
    }
  }
`;

export const Box = styled.article`
  padding: 2%;
  margin-left: 5%; 
  background-color: white;
  width: 60%;
  text-align: center;

  @media (max-width: 999px) {
    padding: 4%;
    margin-top: -15%;
    margin-left: 3%; 
    background-color: white;
    width: 85%;
    text-align: center;
  }
`;

//Main.js
export const Page = styled.div`
  background-color: white;
  margin-bottom: -3%;
  text-align: center;
  margin: 0;
  padding: 0;

  @media (max-width: 999px) {
    margin-bottom: -3%;
    text-align: center;
  }

  @media (max-width: 350px) {
    margin-bottom: -5%;
  }
`;

export const Title = styled.h1`
  background-color: #213ab1;
  padding: 2%;
  margin: -2% 10% 3% 10%;
  color: white;
  text-align: center;
  border-radius: 15px;
  /* box-shadow: 10px 10px rgba(0, 0, 0, 0.2); */
  font-family: 'Cabin', sans-serif;
  font-size: 150%;

  @media (max-width: 350px) {
   padding: 1%; 
   margin: -10% 0 3% 0;
  }
`;

export const PageHeader = styled.div`
  text-align: center;
  background-image: url(${backimg});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position-x: 15%;
  background-position-y: 60%;
  height: 65vh;

  @media (max-width: 999px) {
    height: 35vh;
    background-position: 50% 10%;
    background-size: 100%;
  }

  @media (max-width: 699px) {
    background-position: 30% 10%;
    background-size: 150%;
  }
`;

export const CalcSpace = styled.div`
  text-align: center;
  display: inline-flex;
  
  @media (max-width: 999px) {
    display: block;
    text-align: center;
    justify-content: center;
  }
`;

export const Calculus = styled.div`
  text-align: center;
  width: 80vh;

  @media (max-width: 999px) {
    text-align: center;
    width: 100%;
  }
`;