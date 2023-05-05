import React from 'react';

export const Carroussell = () => {
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
          <div className="carousel-caption text-start" style={{fontSize: "50px", fontFamily: "bahnschrift", color: "#1a9dd9", backgroudColor: "lightblue"}}>
            <h1  >Atencion personalizada</h1>
            {/* <p>Some representative placeholder content for the first slide of the carousel.</p> */}
            <p><a className="btn btn-light" href="/">Contactanos</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> */}
        <img src="./img/carrousellSeis.png" className="d-block w-100" alt="..."></img>
        <div className="container">
        <div className="carousel-caption" style={{fontSize: "50px", fontFamily: "bahnschrift", color: "#FFFFFF", backgroudColor: "lightblue"}}>
            <h1  >Entrega a domicilio</h1>
            {/* <p>Some representative placeholder content for the first slide of the carousel.</p> */}
            <p><a className="btn btn-light" href="/">Contactanos</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <img src="./img/carrousellCinco.png" className="d-block w-100" alt="..."></img>

        <div className="container">
        <div className="carousel-caption d-flex justify-content-end" style={{fontSize: "50px", fontFamily: "bahnschrift", color: "#1a9dd9"}}>
            <h1 style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}} >Productos de calidad</h1>
            {/* <p>Some representative placeholder content for the first slide of the carousel.</p> */}
            <br></br>
            <p><a className="btn btn-light" href="/">Contactanos</a></p>
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
