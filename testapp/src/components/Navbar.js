import React from "react"
import Navbar from "./Navbar"
import MenuButton from "./MenuButton"

function Navbar() {



    return (
        <div style={styleDiv}>
            <div style={styleLogo}>
                <a href="/">
                    <img src=" " alt="Bievenidos"/>
                </a>
            </div>
            <nav>
                <ul style={styleMenu}>
                    <li a href="/" style={styleLinks}>Inicio</li>
                    <li a href="/" style={styleLinks}>Producto</li>
                    <li a href="/" style={styleLinks}>Nosotros</li>
                </ul>
            </nav> 
        </div>
    );
}

export default Navbar