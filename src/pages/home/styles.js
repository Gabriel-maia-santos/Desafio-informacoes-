import styled from "styled-components";

const Separar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 1080px;
    background: linear-gradient(90deg, rgba(121,9,86,1) 4%, rgba(100,45,116,1) 32%, rgba(97,50,120,1) 46%, rgba(92,57,126,1) 57%, rgba(80,78,143,1) 67%, rgba(61,109,169,1) 77%, rgba(40,144,198,1) 87%, rgba(0,212,255,1) 100%);
`;
const Alinhar_Centro = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Alinhar_Fim = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Tudo = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 50px;
    width: 30%
`;
const Imagem = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 300%;
    object-fit: cover;
    object-position: top;
`;
const Nome = styled.h1`
    color: white;
    font-size: 32px;
    font-family: 'DejaVu Sans Mono', monospace;
    padding-top: 10px;
    padding-bottom: 200px;
`;
const Titulo = styled.h2`
    color: white;
    font-family: 'DejaVu Sans Mono', monospace;
    font-size: 25px;
`;
const Texto = styled.p`
    color: white;
    font-family: 'DejaVu Sans Mono', monospace;
    font-weight: bold;
    font-size: 15px;
`;

const Links = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    padding-top: 150px;
`;
const Link = styled.a`
    text-decoration: none;
    font-size: 20px;
    padding-left: 15px;
    padding-right: 70px;
`;
const Alinhar_lado = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

export { 
    Imagem, Nome, Titulo, Texto,
    Tudo,Alinhar_Centro, 
    Separar, Alinhar_Fim ,Links,
    Link, Alinhar_lado
 };
