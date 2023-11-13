import React from 'react'

export const Info = () => {
    const styleContainer ={
        fontFamily: 'bahnschrift',
        padding: '20px'
    }
    const imgStyle ={
        
    }
  return (
    <div className='container ' style={styleContainer}>
 
        
    <div class="p-5 mb-4 mt-5 bg-light rounded-3 row container-lg">
      <div class="container py-5 col">
        <h1 class="display-7 fw-bold">Médidas de seguridad</h1>
        <h5 class="display-7 fw-bold">Antes de conectar la garrafa, controlar lo siguiente:</h5>
        <ol class="  fs-5 list-group-numbered">
            <li class="list-group-item">Ubicar la garrafa parada, en un lugar ventilado.</li>
            <li class="list-group-item">Controlar que las abrazaderas estén ajustadas.</li>
            <li class="list-group-item">Controlar que todas las válvulas estén cerradas.</li>
            <li class="list-group-item">Que no haya fuego alrededor.</li>
            <li class="list-group-item">Que no haya resistencias eléctricas funcionando ni personas fumando.</li>
            <li class="list-group-item">Que la manguera esté en buen estado, sea apta para la presión de trabajo y resistente a los gases de hidrocarburos.</li>
        </ol>
       
      </div>
      
      <div className='col imgInfo'>
        <img alt='imgHistoria' className='img-fluid' src='./img/valvulaSeg.png'></img>
      </div>
    </div>
    <div className='col imgInfoAlta'>
        <img alt='imgHistoria' className='img-fluid' src='./img/licuado.jpg'></img>
      </div>
    <div class="p-5 mb-4 mt-5 bg-light rounded-3 row container-lg">
    <div className='col imgInfo'>
        <img alt='imgHistoria' className='img-fluid' src='./img/hornalla.jpg'></img>
      </div>

      <div class="container py-5 col">
        
        <h5 class="display-7 fw-bold">Una vez conectada la garrafa:</h5>
        <ol class="  fs-5 list-group-numbered">
            <li class="list-group-item">Abrir lentamente la válvula.</li>
            <li class="list-group-item">Verificar con agua jabonosa que no haya pérdidas en la propia válvula ni en las conexiones.</li>
          
        </ol>
       
      </div>
      
      
    </div>
    <div class="p-5 mb-4 mt-5 bg-light rounded-3 row container-lg">
      <div class="container py-5 col">
        
        <h5 class="display-7 fw-bold"> En caso de advertirse una fuga:</h5>
        <ol class="  fs-5 list-group-numbered">
            <li class="list-group-item">Cerrar la válvula.</li>
            <li class="list-group-item">No encender ni apagar luces y/o linternas comunes hasta haber reparado la pérdida.</li>
            <li class="list-group-item">Ventilar el lugar.</li>
          
        </ol>
       
      </div>
      
      <div className='col imgInfo'>
        <img alt='imgHistoria' className='img-fluid' src='./img/ventilar.jpg'></img>
      </div>
    </div>
    <div class="p-5 mb-4 mt-5 bg-light rounded-3 row container-lg">
    <div className='col imgInfo'>
        <img alt='imgHistoria' className='img-fluid' src='./img/extintor.jpg'></img>
      </div>
      <div class="container py-5 col">
        
        <h5 class="display-7 fw-bold"> Si el producto ardiera:</h5>
        <ol class="  fs-5 list-group-numbered">
            <li class="list-group-item">Cerrar la válvula para extinguir la llama.</li>
            <li class="list-group-item">Si el fuego no se apagara, evitar el contacto con combustibles vecinos y extinguir con matafuegos o trapos húmedos.</li>
            <li class="list-group-item">Si la llama se extinguiera pero la pérdida continuara, desconectar el envase del artefacto y llevar la garrafa a un espacio ventilado.</li>
            <li class="list-group-item">En ambos casos, comunicarse con el destacamento de bomberos y con el proveedor.</li>
        </ol>
       
      </div>
      
     
    </div>
    <div class="p-5 mb-4 mt-5 bg-light rounded-3 row container-lg">
      <div class="container py-5 col">
        
        <h3 class="display-7 fw-bold"> MUY IMPORTANTE</h3>
        <p class=" fs-5"> El envase debe ser conectado exclusivamente a artefactos, reguladores, accesorios, etc. Aprobados para el uso con gas licuado de petróleo (GLP). Caso contrario, se advierte del serio peligro.
Está prohibido el uso de gas licuado contenido en este recipiente como combustible en automotores.
Señor Consumidor: No acepte el envase si el precinto no se encuentra colocado.


        </p>
       
      </div>
      
      <div className='col imgInfo'>
        <img alt='imgHistoria' className='img-fluid' src='./img/artefactos.png'></img>
      </div>
    </div>
    <div className='col imgInfoAlta'>
        <img alt='imgHistoria' className='img-fluid' src='./img/artefactos.png'></img>
      </div>
    <div class="p-5 mb-4 bg-light rounded-3 row container-lg">
      <div class="container py-5 col">
        <h1 class="display-7 fw-bold">¿Poqué utilizar GLP de YPF Gas en autoelevadores?</h1>
        <br></br>
        <h3 class=" ">Más económico:</h3>
        <p class=" fs-5"> Comparando valores de compra, las máquinas nuevas nafteras convertidas a GLP son más convenientes 
        que las diesel, incluyendo el costo por hora de funcionamiento y mantenimiento. En autoelevadores usados, el menor
         gasto en combustible permite pagar la conversión en muy poco tiempo, extendiéndose el ahorro a toda la vida útil de la máquina.


        </p>
        
        <h3 class=" ">Más ecológico:</h3>
        <p class=" fs-5"> Comparado con otros combustibles, la combustión completa del GLP da como resultado gases mucho más limpios
         y sin olor. Las emisiones de monóxido de carbono y de hidrocarburos no quemados se reducen hasta en un 67 y 60% respectivamente,
          no conteniendo además residuos de plomo, azufre y benzopireno.



        </p>
        <h3 class=" ">Mejor funcionamiento:</h3>
        <p class=" fs-5"> Por intermedio del vaporizador, el gas se suministra a la alimentación del motor del autoelevador 
        en estado gaseoso formando una mezcla perfectamente homogénea. De esta forma, se iguala la llegada del combustible a 
        los cilindros lográndose un mejor funcionamiento del motor, sin tirones para la transmisión y con una marcha más suave en ralenti.



        </p>
        <h3 class=" ">Envase intercambiable:</h3>
        <p class=" fs-5">Los envases para el almacenamiento de GLP que utilizan los autoelevadores deben ser de 15 kg. 
        de capacidad, según reglamenta la disposición 13/97 de la Secretaría de Energía de la Nación. Los envases de 15 kg.
         de YPF Gas para autoelevadores superan satisfactoriamente los ensayos que dictan las normas locales, y sus accesorios
          de primera calidad cumplen con todas las normas nacionales e internacionales, como la UL y la NFPA, con un diseño que los hace seguros y con gran vida útil.




        </p>
      </div>
     
      <div className='col imgInfo'>
        <img alt='imgHistoria' className='img-fluid' src='./img/autoelevador2.jpg'></img>
      </div>
    </div>
   
    <div className='col imgInfoAlta'>
        <img alt='imgHistoria' className='img-fluid' src='./img/autoelevador2.jpg'></img>
      </div>
   

    </div>
  )
}
