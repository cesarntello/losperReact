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
        <p class=" fs-4"> Ad ad do adipisicing adipisicing. Ad pariatur aliquip nulla mollit dolor mollit cupidatat tempor dolore pariatur laborum laborum. Aliqua proident ullamco duis sit commodo cillum ullamco ipsum consequat. Occaecat do do id elit mollit est officia elit. Sit culpa et enim pariatur cupidatat anim eiusmod Lorem ipsum dolor do eiusmod in nostrud. Cupidatat est est sunt elit enim sit laborum cupidatat aute aliqua.</p>
        {/* <button class="btn btn-primary btn-lg" type="button">Example button</button> */}
      </div>
      <div className='col'>
        <img alt='imgHistoria' className='img-fluid' src='./img/2.jpg'></img>
      </div>
    </div>

    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <h2>Misión</h2>
          <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
          {/* <button class="btn btn-outline-light" type="button">Example button</button> */}
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border rounded-3">
          <h2>Visión</h2>
          <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
          {/* <button class="btn btn-outline-secondary" type="button">Example button</button> */}
        </div>
      </div>
    </div>

    </div>
  )
}
