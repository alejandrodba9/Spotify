import React from "react";
import { Contenedor, ContenedorFlechas, Derecha, Flechas, Fondo, Gris, Header, Songs, Titulo, Amigos, Usuario, Songimg, SongBetween, SongName, SongPlay, Cards } from "./styledBody";
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"
import { PiUsersThree } from "react-icons/pi"
import { GrPlayFill } from "react-icons/gr"
import playa from "../img/playa.jpg"
import yo from "../img/yo.jpg"
import Tainy from "../img/Tainy.jpg"
import eladio from "../img/eladio.jpg"
import arca from "../img/arca.jpg"
import feid from "../img/feid.jpg"
import mora from "../img/mora.jpg"
import corridos from "../img/corridos.jpg"
import wild from "../img/wild.jpg"
import docu from "../img/docu.jpg"
import caso from "../img/caso.jpg"
import herma from "../img/herma.jpg"
import crea from "../img/crea.jpg"
import YHLQMDLG from "../img/YHLQMDLG.jpg"
import unoporciento from "../img/unoporciento.jpg"
import unveranosinti from "../img/un-verano-sin-ti.jpg"
import Ymikko from "../img/Ymikko.jpg"
import Frxxo from "../img/Frxxo.jpg"
import sobredosis from "../img/sobredosis.jpg"
import TrmendoKbron from "../img/TrmendoKbron.jpg"


const Body = () => {
return <div>
    <Fondo>
        <Gris>
            <Header>
                <ContenedorFlechas>
                    <Flechas><IoIosArrowBack/></Flechas>
                    <Flechas><IoIosArrowForward/></Flechas>
                </ContenedorFlechas>
                <Derecha>
                    <Amigos><PiUsersThree/></Amigos>
                    <Usuario src={yo}></Usuario>
                </Derecha>
            </Header>
            <Titulo>
            </Titulo>
            <Titulo>
                <h1 style={{marginLeft: "33px"}}>Buenas Tardes</h1>
            </Titulo>
            <Contenedor>
                <Songs>
                    <Songimg src={arca}/><SongBetween><SongName><p style={{marginLeft: "20px"}}>🫡</p></SongName><SongPlay><GrPlayFill/></SongPlay></SongBetween>
                </Songs>
                <Songs>
                    <Songimg src={eladio}/><SongBetween><SongName><p style={{marginLeft: "20px"}}>Eladio God</p></SongName><SongPlay><GrPlayFill/></SongPlay></SongBetween>
                </Songs>
                <Songs>
                    <Songimg src={playa}/><SongBetween><SongName><p style={{marginLeft: "20px"}}>Playa Saturno</p></SongName><SongPlay><GrPlayFill/></SongPlay></SongBetween>
                </Songs>
                <Songs>
                    <Songimg src={corridos}/><SongBetween><SongName><p style={{marginLeft: "20px"}}>Corridos</p></SongName><SongPlay><GrPlayFill/></SongPlay></SongBetween>
                </Songs>
                <Songs>
                    <Songimg src={mora}/><SongBetween><SongName><p style={{marginLeft: "20px"}}>Mora</p></SongName><SongPlay><GrPlayFill/></SongPlay></SongBetween>
                </Songs>
                <Songs>
                    <Songimg src={Tainy}/><SongBetween><SongName><p style={{marginLeft: "20px"}}>DATA</p></SongName><SongPlay><GrPlayFill/></SongPlay></SongBetween>
                </Songs>
            </Contenedor>
            <Titulo style={{marginTop: "10px"}}>
            <h1 style={{marginLeft: "33px", fontSize: "20px"}}>Tus Programas</h1>
            </Titulo>
            <Contenedor style={{height: "275px", marginTop: "20px"}}>
                <Cards><Songimg src={wild} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>The Wild Project</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Jordi Wild</p></Cards>
                <Cards><Songimg src={docu} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>Docuhistoria</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Docuhistoria</p></Cards>
                <Cards><Songimg src={caso} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>Caso 63</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Spotify Studios</p></Cards>
                <Cards><Songimg src={herma} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>Hermanos De Leche</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Bam Comunication</p></Cards>
                <Cards><Songimg src={crea} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>CREATIVO CLIPS</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Roberto Mtz</p></Cards>
            </Contenedor>
            <Titulo style={{marginTop: "20px", marginBottom: "20px"}}>
            <h1 style={{marginLeft: "33px", fontSize: "20px"}}>Albumes Populares</h1>
            </Titulo>
            <Contenedor>
                <Cards>
                    <Songimg src={feid} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>SIXDO</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px",}}>Feid</p>
                </Cards>
                <Cards>
                    <Songimg src={YHLQMDLG} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>YHLQMDLG</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Bad Bunny</p>
                </Cards>
                <Cards>
                    <Songimg src={unoporciento} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>un x100to</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Grupo Frontera, Bad Bunny</p>
                </Cards>
                <Cards>
                    <Songimg src={unveranosinti} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>Un Verano Sin Ti</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Bad Bunny</p>
                </Cards>
                <Cards>
                    <Songimg src={Ymikko} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>Classy 101</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Feid, Young Miko</p>
                </Cards>
                <Cards>
                    <Songimg src={sobredosis} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>MICRODOSIS</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Mora</p>
                </Cards>
                <Cards>
                    <Songimg src={Frxxo} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>FELIZ CUMPLEAÑO...</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Feid</p>
                </Cards>
                <Cards>
                    <Songimg src={TrmendoKbron} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>3MEN2 KBRN</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Eladio Carrion</p>
                </Cards>
                <Cards>
                    <Songimg src={crea} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>CREATIVO CLIPS</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Roberto Mtz</p>
                </Cards>
                <Cards>
                    <Songimg src={crea} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>CREATIVO CLIPS</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Roberto Mtz</p>
                </Cards>
                <Cards>
                    <Songimg src={wild} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>The Wild Project</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Jordi Wild</p>
                </Cards>
                <Cards>
                    <Songimg src={docu} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>Docuhistoria</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Docuhistoria</p>
                </Cards>
                <Cards>
                    <Songimg src={caso} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>Caso 63</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Spotify Studios</p>
                </Cards>
                <Cards>
                    <Songimg src={herma} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>Hermanos De Leche</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Bam Comunication</p>
                </Cards>
                <Cards>
                    <Songimg src={crea} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>CREATIVO CLIPS</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Roberto Mtz</p>
                </Cards>
                <Cards>
                    <Songimg src={wild} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>The Wild Project</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Jordi Wild</p>
                </Cards>
                <Cards>
                    <Songimg src={docu} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>Docuhistoria</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Docuhistoria</p>
                </Cards>
                <Cards>
                    <Songimg src={caso} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>Caso 63</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Spotify Studios</p>
                </Cards>
                <Cards>
                    <Songimg src={herma} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>Hermanos De Leche</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Bam Comunication</p>
                </Cards>
                <Cards>
                    <Songimg src={crea} style={{width: "160px", height: "160px", padding: "16px", borderRadius: "20px"}}/><p style={{color: "#fff", marginLeft: "20px"}}>CREATIVO CLIPS</p><p style={{color: "#bbbb", marginLeft: "20px", fontWeight: "400", marginTop: "5px", fontSize: "14px"}}>Roberto Mtz</p>
                </Cards>
            </Contenedor> 
        </Gris>
    </Fondo>
</div>
}

export default Body;