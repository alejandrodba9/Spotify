import React from "react";
import { BarraPrincipal, Derecha, Izquierda, Medio, SongTitule, Songimg, Barra, Playbuttom, Linea, LineaPeque } from "./styledStaticBar"; 
import {BsFillSuitHeartFill} from "react-icons/bs"
import sauce from "../img/sauceboys.jpg"
import hpta from "../img/hpta.jpg"
import random from "../img/random.jpg"
import atras from "../img/atras.jpg"
import play from "../img/play.jpg"
import adelante from "../img/adelante.jpg"
import repetir from "../img/repetir.jpg"
import micro from "../img/micro.jpg"
import burguir from "../img/burguir.jpg"
import dispo from "../img/dispo.jpg"
import vol from "../img/vol.jpg"
import ampliar from "../img/ampliar.jpg"



const StaticBar = () => {
    return (
        <BarraPrincipal>
            <Izquierda>
                <Songimg src={sauce} /> <SongTitule><p style={{fontSize: "13.1px", cursor: "pointer"}}>Huh?</p> <p style={{fontSize: "10px", color: "#bbb", cursor: "pointer"}}>Eladio Carrion, Smokepurpp</p> </SongTitule>
                <BsFillSuitHeartFill style={{color: "#1ed760", fontSize: "17px", cursor: "pointer"}}/>
                <Songimg src={hpta}  style={{height: "20px", marginLeft: "5px"}}/>
            </Izquierda>
            <Medio>
                <Barra>
                    <Songimg src={random}  style={{height: "20px", margin: "2px"}}/>
                    <Songimg src={atras}  style={{height: "20px", margin: "2px"}}/>
                    <Playbuttom src={play}  style={{height: "37px", margin: "5px"}}/>
                    <Songimg src={adelante}  style={{height: "20px", margin: "2px"}}/>
                    <Songimg src={repetir}  style={{height: "20px", margin: "2px"}}/>
                </Barra>
                <Barra>
                    <p style={{color: "#a7a7a7", fontSize: "11px", margin: "5px"}}>0:51</p><Linea><LineaPeque/></Linea><p style={{color: "#a7a7a7", fontSize: "11px", margin: "5px"}}>2:42</p>
                </Barra>
            </Medio>
            <Derecha>
            <Songimg src={micro} style={{height: "20px"}}/>
            <Songimg src={burguir} style={{height: "20px"}}/>
            <Songimg src={dispo} style={{height: "20px"}}/>
            <Songimg src={vol} style={{height: "20px"}}/>
            <LineaPeque style={{width: "93px", borderRadius: "5px"}}/>
            <Songimg src={ampliar} style={{height: "20px"}}/>
            </Derecha>
        </BarraPrincipal>
    )
}


export default StaticBar