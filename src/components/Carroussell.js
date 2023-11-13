import React from 'react';
import { Link } from 'react-router-dom'

export const Carroussell = () => {

const styleh1 = { 
  background: 'rgba(255, 255, 255, 0.6)', /* Establece el color de fondo con transparencia */
  backdropFilter: 'blur(5px)', /* Aplica el efecto de difuminado */
  padding: '10px', /* Añade algo de espacio alrededor del texto para mayor legibilidad */
  borderRadius: '10px', /* Agrega bordes redondeados para que se vea más atractivo */
  fontSize: "40px",
  display: 'inline'
}

  return (
    <div>
          <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> */}
        <img src="./img/carrousellTres.png" className="d-block w-100" alt="..."></img>
        <div className="container">
          <div className="carousel-caption text-start" style={{fontSize: "50px", fontFamily: "bahnschrift", color: "#282c34", backgroudColor: "lightblue"}}>
            <h1 className="blurred-background" style={styleh1}  >Atención personalizada</h1>
            {/* <p>Some representative placeholder content for the first slide of the carousel.</p> */}
            <p><Link to='/formulario'><a className="btn btn-light" href="/">Contactanos</a></Link></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> */}
        <img src="./img/carrousellDiez.png" className="d-block w-100" alt="..."></img>
        <div className="container">
        <div className="carousel-caption" style={{fontSize: "50px", fontFamily: "bahnschrift", color: "#282c34", backgroudColor: "lightblue"}}>
            <h1 style={styleh1}  >Entrega a domicilio</h1>
            {/* <p>Some representative placeholder content for the first slide of the carousel.</p> */}
            <p><Link to='/formulario'><a className="btn btn-light" href="/">Contactanos</a></Link></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <img src="./img/carrousellSiete.png" className="d-block w-100" alt="..."></img>

        <div className="container">
        <div className="carousel-caption text-end" style={{fontSize: "50px", fontFamily: "bahnschrift", color: "#1a9dd9", backgroudColor: "lightblue" }}>
            <h1 style={styleh1}  >Productos de calidad</h1>
            {/* <p>Some representative placeholder content for the first slide of the carousel.</p> */}
            
            <p><Link to='/formulario'><a className="btn btn-light" href="/">Contactanos</a></Link></p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    </div>
  )
}
