import React from 'react'

export const Scope = () => {
  return (
    <div>
       <div class="container  mapsIframe">
        <h3 class="consultaTitle">
          Nuestro alcance geográfico
        </h3>
       <div class="img-fluid container  ">
       <iframe src="https://www.google.com/maps/d/embed?mid=1pBT1TASrrBiExW4u8B5xPpp4VnZSbxM&ehbc=2E312F" title='Alcance' width="100%" height="480"></iframe>
      </div>
    

      
    </div>
    <div class="container mapsIframe ">
      <h3 class="consultaTitle">
        Encontrá nuestros productos en las estaciones de servicio YPF
      </h3>
      <div class=" ratio ratio-4x3">
    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1dgNbXPz7UvV76ifIuoO38t3ZLk_TjS3D" width="100%" height="480"></iframe>
      </div>
    </div> 
    </div>
  )
}
