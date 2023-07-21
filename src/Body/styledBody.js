import styled from "styled-components";

export const Fondo = styled.div`
    height: auto;
`

export const Gris = styled.div`
    height: 89.5vh;
    width: 1780px;
    border-radius: 10px;
    margin-top: 10px;
    background-color: #121212;
    overflow: scroll;
    &::-webkit-scrollbar{
        width: 0;
        height: 0;
    }
`

export const Header = styled.div`
    width: 1780px;
    height: 65px;
    background-color: #121212;
    display: flex;
    border-radius: 15px;
    justify-content: space-between;
    position: fixed;
`

export const ContenedorFlechas = styled.div`
    height: 50px;
    width: 75px;
    margin-top: 10px;
    font-size: 1.3em;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 30px;
`

export const Flechas = styled.div`
    color: #fff;
    width: 1em;
    height: 1em;
    padding: .3em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0000007b;
    cursor: pointer;
`

export const Amigos = styled.div`
    color: #a7a7a7;
    width: 1em;
    height: 1em;
    padding: .3em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0000007b;
    cursor: pointer;
    &:hover{
        transform: scale(1.06,1.07);
        color: #fff;
    }
`

export const Derecha = styled.div`
    height: 50px;
    width: 75px;
    margin-top: 10px;
    font-size: 1.3em;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 30px;
`

export const Usuario = styled.img`
    color: #fff;
    width: 1.3em;
    height: 1.3em;
    padding: .3em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0000007b;
    cursor: pointer;
    &:hover{
        transform: scale(1.05,1.06);
    }
`

export const Titulo = styled.div`
    width: 100%;
    height: 50px;
    margin-top: 8px;
    display: flex;
    align-items: end;
    font-size: 15px;
    border-radius: 15px;
    color: #fff;
`

export const Contenedor = styled.div`
    height: 190px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #121212;
`

export const SongPlay = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border: 0;
    box-shadow: 0px 5px 10px #0000008b;
    background-color: #20d564;
    opacity: 0;
    &:hover{
        transform: scale(1.05,1.06);
    }
`

export const Songs = styled.div`
    height: 75px;
    width: 550px;
    margin-top: 20px;
    margin-left: 30px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    background-color: #2c2c2c;
    cursor: pointer;
    &:hover{
        background-color: #424343;
    }
    &:hover ${SongPlay}{
    opacity: 1;
    transition: .5s;
}
`

export const Songimg = styled.img`
    height: 75px;
    width: 80px;
    border-radius: 5px 0px 0px 5px;
`

export const SongBetween = styled.div`
    width: 440px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SongName = styled.div`
    width: auto;
    font-weight: 600;
    font-size: 15px;
    align-items: center;
    color: #fff;
`

export const Cards = styled.div`
    height: 275px;
    width: 185px;
    border-radius: 5px;
    margin-left: 30px;
    margin-bottom: 40px;
    background-color: #181818;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    font-weight: 600;
    &:hover{
        background-color: #2c2c2c;
    }
`

export const Podcast = styled.div`
    width: 100px;
    height: 100px;
`
