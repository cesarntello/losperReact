import React from 'react'

import { Link } from 'react-router-dom';
export const Section = () => {
  return (
    <div>

        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <img src='./img/garrafas.png' alt='garrafas-section' className="float-end"></img>
            <div className="col-md-5 p-lg-5  my-5 align-self-end sectionHomeText">
            
               <h1 className="display-4 fw-normal sectionHomeText">La garrafa mas segura a la puerta de tu hogar.</h1>
                <p className="lead fw-normal sectionHomeP">Distribuimos gas licuado de petróleo envasado en garrafas y cilindros  de hasta 45kg. Somos el mayor distribuidor de la zona de Cuyo</p>
                <a className="btn btn-outline-secondary" href="/"><Link to='/formulario'>Hacé tu pedido</Link></a>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
      
    </div>
  )
}
