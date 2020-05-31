import React, { useState } from 'react'

const Hola = {
    fontSize: "50px"
}

const ejemplo = {
    width: "100%",
    height: "100%"
}

const hello = {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    height: "600px",
    width:  "600px",
    background: "red",
    padding: "10px",
    gridRowGap: "10px",
    gridColumnGap: "10px"
}
const hola2 = {
    position: "flex"
}
const Hud = (con) => {
    return(
        <div style = {hola2}> 
            <h1 style = {Hola}> Memoria </h1>
            <h2>Moviminetos: {con.messege}</h2>
        </div>
    )
}

const Game = (click) => {
    return(
        <div style = {hello}>
            <div style= {ejemplo}><img style = {ejemplo} onClick={click.onClickFunction} src="https://www.nidmi.us/img/categorias/dog-walkers-paseador-perros.jpg"/></div>
            <div style= {ejemplo}><img style = {ejemplo} onClick={click.onClickFunction} src="https://www.nidmi.us/img/categorias/dog-walkers-paseador-perros.jpg"/></div>
            <div style= {ejemplo}><img style = {ejemplo} onClick={click.onClickFunction} src="https://www.nidmi.us/img/categorias/dog-walkers-paseador-perros.jpg"/></div>
            <div style= {ejemplo}><img style = {ejemplo} onClick={click.onClickFunction} src="https://www.nidmi.us/img/categorias/dog-walkers-paseador-perros.jpg"/></div>
            <div style= {ejemplo}><img style = {ejemplo} onClick={click.onClickFunction} src="https://www.nidmi.us/img/categorias/dog-walkers-paseador-perros.jpg"/></div>
            <div style= {ejemplo}><img style = {ejemplo} onClick={click.onClickFunction} src="https://www.nidmi.us/img/categorias/dog-walkers-paseador-perros.jpg"/></div>
            <div style= {ejemplo}><img style = {ejemplo} onClick={click.onClickFunction} src="https://www.nidmi.us/img/categorias/dog-walkers-paseador-perros.jpg"/></div>
            <div style= {ejemplo}><img style = {ejemplo} onClick={click.onClickFunction} src="https://www.nidmi.us/img/categorias/dog-walkers-paseador-perros.jpg"/></div>
            <div style= {ejemplo}><img style = {ejemplo} onClick={click.onClickFunction} src="https://www.nidmi.us/img/categorias/dog-walkers-paseador-perros.jpg"/></div>
            <div style= {ejemplo}><img style = {ejemplo} onClick={click.onClickFunction} src="https://www.nidmi.us/img/categorias/dog-walkers-paseador-perros.jpg"/></div>
            <div style= {ejemplo}><img style = {ejemplo} onClick={click.onClickFunction} src="https://www.nidmi.us/img/categorias/dog-walkers-paseador-perros.jpg"/></div>
            <div style= {ejemplo}><img style = {ejemplo} onClick={click.onClickFunction} src="https://www.nidmi.us/img/categorias/dog-walkers-paseador-perros.jpg"/></div>
            <div style= {ejemplo}><img style = {ejemplo} onClick={click.onClickFunction} src="https://www.nidmi.us/img/categorias/dog-walkers-paseador-perros.jpg"/></div>
            <div style= {ejemplo}><img style = {ejemplo} onClick={click.onClickFunction} src="https://www.nidmi.us/img/categorias/dog-walkers-paseador-perros.jpg"/></div>
            <div style= {ejemplo}><img style = {ejemplo} onClick={click.onClickFunction} src="https://www.nidmi.us/img/categorias/dog-walkers-paseador-perros.jpg"/></div>
            <div style= {ejemplo}><img style = {ejemplo} onClick={click.onClickFunction} src="https://www.nidmi.us/img/categorias/dog-walkers-paseador-perros.jpg"/></div>
        </div>
    )
}

const Union = () => {
    const [counter, setCounter] = useState(0)
    const incrementCounter = () => setCounter(counter + 1)
    return(
        <div>
            <Hud messege = {counter} />
            <Game onClickFunction = {incrementCounter} />
        </div>
    )
}

export default Union