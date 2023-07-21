import React from "react";
import { ContImg, Fondo, Iconos, IconosImg, IzquiAbajo, IzquiArriba, Izquierda, } from "./styledHeader";
import megusta from "../img/megusta.jpg"
import guardado from "../img/guardado.jpg"
import Tainy from "../img/Tainy.jpg"
import sietesiete from "../img/sietesiete.jpg"
import eladio from "../img/eladio.jpg"
import arca from "../img/arca.jpg"
import vallenato from "../img/vallenato.jpg"
import mora from "../img/mora.jpg"
import quillita from "../img/quillita.jpg"
import general from "../img/general.jpg"
import { GoHomeFill } from "react-icons/go"
import { AiOutlineSearch } from "react-icons/ai"
import { BiLibrary } from "react-icons/bi"


const Header = () => {
    return <div>
        <Fondo>
            <Izquierda>
                <IzquiArriba>
                    <GoHomeFill style={{color: "#fff"}}/>
                    <AiOutlineSearch style={{marginTop: "8px"}}/> 
                </IzquiArriba> 
                <IzquiAbajo>
                    <Iconos><BiLibrary/></Iconos>
                    <ContImg><IconosImg src={megusta}/></ContImg>
                    <ContImg><IconosImg src={guardado}/></ContImg>
                    <ContImg><IconosImg src={Tainy}/></ContImg>
                    <ContImg><IconosImg src={sietesiete}/></ContImg>
                    <ContImg><IconosImg src={eladio}/></ContImg>
                    <ContImg><IconosImg src={arca}/></ContImg>
                    <ContImg><IconosImg src={vallenato}/></ContImg>
                    <ContImg><IconosImg src={mora}/></ContImg>
                    <ContImg><IconosImg src={quillita}/></ContImg>
                    <ContImg><IconosImg src={general}/></ContImg>
                    <ContImg><IconosImg src={vallenato}/></ContImg>
                    <ContImg><IconosImg src={eladio}/></ContImg>
                    <ContImg><IconosImg src={Tainy}/></ContImg>
                    <ContImg><IconosImg src={sietesiete}/></ContImg>
                    <ContImg><IconosImg src={eladio}/></ContImg>
                    <ContImg><IconosImg src={mora}/></ContImg>
                    <ContImg><IconosImg src={quillita}/></ContImg>
                    <ContImg><IconosImg src={general}/></ContImg>
                    <ContImg><IconosImg src={vallenato}/></ContImg>
                </IzquiAbajo>
            </Izquierda>
        </Fondo>
    </div>
}

export default Header;