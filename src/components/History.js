import React from 'react'
import { Section } from './Section'

export const History = () => {

const styleContainer ={
    fontFamily: 'bahnschrift',
    padding: '20px'
}

  return (
    <div className='container' style={styleContainer}>
    <Section></Section>
        
    <div class="p-5 mb-4 bg-light rounded-3 row container-lg">
      <div class="container py-5 col">
        <h1 class="display-5 fw-bold">Nuestra historia</h1>
        <p class=" fs-4"> Losper S.A. nace el 15 de Abril de 2001 como fusión de los más importantes distribuidores de YPF GAS en el Gran Mendoza. 

Nuestra misión siempre fue la misma, llevar un gas seguro, eficiente y de calidad a los hogares, empresas e industrias de nuestra provincia.

Bajo el modelo de gestión y capacitación de YPF GAS, y con el compromiso de mejora continua, logramos la construcción del depósito de GLP más moderno de la región y la inversión de una flota de 20 camiones de logística y distribución. 

Estos avances nos posicionan como líderes en el mercado y fortalecen nuestro compromiso con quienes confían en nosotros. 
</p>
        {/* <button class="btn btn-primary btn-lg" type="button">Example button</button> */}
      </div>
      <div className='col imgInfo'>
        <img alt='imgHistoria' className='img-fluid' src='./img/2.jpg'></img>
      </div>
    </div>
    <div className='col imgInfoAlta'>
        <img alt='imgHistoria' className='img-fluid' src='./img/2.jpg'></img>
      </div>
    <div class="row align-items-md-stretch mt-3">
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <h2>Visión</h2>
          <p>Contribuir a la tranquilidad de los hogares y a la eficiencia de las empresas e industrias con un gas confiable y rendidor. Y difundir la importancia de contar con una empresa líder como lo es YPF GAS.</p>
          {/* <button class="btn btn-outline-light" type="button">Example button</button> */}
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border rounded-3">
          <h2>Misión</h2>
          <p>En Losper nos encargamos de llevar el mejor gas envasado del mercado a casas, empresas e industrias mendocinas. Somos orgullosos Distribuidores Oficiales de YPF Gas.</p>
          {/* <button class="btn btn-outline-secondary" type="button">Example button</button> */}
        </div>
      </div>
      <div class="container py-5 col">
        <h3 class="display-6 fw-bold">Valores</h3>
        <ul class="  fs-3 list-group-numbered">
            <li class="list-group-item">Eficiencia</li>
            <li class="list-group-item">Calidad</li>
            <li class="list-group-item">Responsabilidad</li>
            <li class="list-group-item">Respaldo</li>
            <li class="list-group-item">Mejora continua</li>
        </ul>
        {/* <button class="btn btn-primary btn-lg" type="button">Example button</button> */}
      </div>
    </div>

    </div>
  )
}
