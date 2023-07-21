import styled from "styled-components";

export const BarraPrincipal = styled.div`
    width: 100%;
    height: 88px;
    background-color: #000;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Izquierda = styled.div`
    width: 25%;
    height: 70px;
    margin-left: 10px;
    display: flex;
    align-items: center;
`
export const Songimg = styled.img`
    height: 56px;
    border-radius: 11px;
    padding: 7px;
    cursor: pointer;
`

export const SongTitule = styled.div`
    height: 40px;
    width: 160px;
    display: flex;
    flex-direction: column;
    margin-top: 2px;
    margin-left: 10px;
    color: #fff;
    &:hover{
        text-decoration: underline;
    }
`

export const Medio = styled.div`
    width: 48%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Barra = styled.div`
    height: 30px;
    width: 800px;
    margin-top: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
`

export const Playbuttom = styled.img`
    height: 56px;
    border-radius: 11px;
    padding: 7px;
    cursor: pointer;
    &:hover{
        transform: scale(1.05,1.06);
    }
`

export const LineaPeque = styled.div`
    height: 4px;
    width: 200px;
    border-radius: 5px 0px 0px 5px;
    background-color: #fff;
    &:hover{
        background-color: #1ed760;
    }
`

export const Linea = styled.div`
    height: 4px;
    width: 628px;
    border-radius: 5px;
    background-color: #4c4c4c;
    &:hover ${LineaPeque}{
        background-color: #1ed760;
}
`



export const Derecha = styled.div`
    width: 25%;
    height: 70px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: end;
`

