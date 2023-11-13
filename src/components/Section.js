import React from 'react'

import { Link } from 'react-router-dom';
export const Section = () => {
  return (
    <div className='' style={{backgroundColor:  'white'}}>

        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center ">
        <img src='./img/3garrafas.png' alt='garrafas-section' className="float-end img-fluid" style={{height: 'auto', width: '350px'}}></img>
            <div className="col-md-9 p-lg-5  my-5 align-self-end sectionHomeText">
            
               <h1 className="display-4 fw-normal sectionHomeText">Llevamos la garrafa más segura a tu casa, empresa o industria.</h1>
                <p className="lead fw-normal sectionHomeP">Somos Distribuidores Oficiales de YPF Gas en Mendoza.</p>
                <a className="btn btn-secondary btn-lg" style={{color: 'white'}} href="/"><Link to='/formulario'><a className='text-white'>Quiero hacer un pedido</a></Link></a>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        
    </div>
  )
}
