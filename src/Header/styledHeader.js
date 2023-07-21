import styled from "styled-components";

export const Fondo = styled.div`
    height: 100vh;
    width: 90px;
    background-color: #000;
`

export const Izquierda = styled.div`
    height: 100%;
    margin-left: 10px;
    background-color: #000;
    display: flex;
    flex-direction: column;
`

export const IzquiArriba = styled.div`
    height: 84px;
    width: 72px;
    margin-top: 10px;
    border-radius: 10px;
    background-color: #121212;
    color: #a7a7a7;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 30px;
    cursor: pointer;
    &:hover{
        color: #ffff;
    }
`
export const IzquiAbajo = styled.div`
    height: 740px;
    width: 72px;
    margin-top: 10px;
    border-radius: 10px;
    background-color: #121212;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: scroll;
    &::-webkit-scrollbar{
        width: 0;
        height: 0;
    }
`

export const Iconos = styled.div`
    width: 50px;
    height: 50px;
    margin-top: 25px;
    margin-bottom: 20px;
    font-size: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a7a7a7;
    cursor: pointer;
    border-radius: 5%;
    &:hover{
        color: #ffffff;
        transition: .5s;
    }
`

export const ContImg = styled.div`
    height: 75px;
    width: 66px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #181820;
        transition: 1s;
    }
`

export const IconosImg = styled.img`
    height: 50px;
    padding: 7px;
    border-radius: 11px;
    cursor: pointer;
    &:hover{
        background-color: #181818;
    }
`




