import React ,{  }from 'react'
export const Products = () => {

   
//     const productStyle ={
//         display: 'flex',
//         with: '100%',
//         height: '100%'
       
//     }
//     const productStyle2 ={
//         display: 'flex',
//         with: '80%',
//         height: '80%',
//         paddingTop: '70px'
//     }
 
// const classWhite = 'bg-light me-md-3 pt-3 w-100 px-3 pt-md-5 px-md-5 text-center text-dark overflow-hidden'
// const classDark = 'bg-dark me-md-3 pt-3 w-100 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden'
// const classWhiteInterior = 'bg-white shadow-sm mx-auto'
// const classDarkInterior = 'bg-dark shadow-sm mx-auto'
// const classCyanInterior = 'bg-cyan shadow-sm mx-auto'
//     const [className, setClassName] = useState(classWhiteInterior);
//     const [className2, setClassName2] = useState(classWhiteInterior);
//     const [className3, setClassName3] = useState(classDarkInterior)
//     const [className4, setClassName4] = useState(classDarkInterior);
//   const handleMouseEnter = () => {
//     setClassName2(classCyanInterior);
//   };
//   const handleMouseLeave = () => {
//     setClassName2(classWhiteInterior);
//   };
//   const handleMouseEnter2 = () => {
//     setClassName4(classCyanInterior);
//   };
//   const handleMouseLeave2 = () => {
//     setClassName4(classDarkInterior);
//   };
//   const handleMouseEnter3 = () => {
//     setClassName3(classCyanInterior);
//   };
//   const handleMouseLeave3 = () => {
//     setClassName3(classDarkInterior);
//   };
//   const handleMouseEnter4 = () => {
//     setClassName(classCyanInterior);
//   };
//   const handleMouseLeave4 = () => {
//     setClassName(classWhiteInterior);
//   };

const prodContainerBgStyle ={
  // backgroundImage: 'url(./img/sectionProduct.jpg)',
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  backgroundColor: ''
}
  return (
    <div style={prodContainerBgStyle}>
    {/* <div className='prodContainerBg' >
    <div className=''>
           <div className='m-5 text-center' style={{fontFamily: "bahnschrift", color: "#1a9dd9", marginTop: "20px"}}>
             <h1  style={{ paddingTop: "20px"}}>Nuestros productos</h1>
           </div>
        <div class=" d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 ">
           
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} class={classDark} style={{width: '100%', fontFamily:'bahnschrift'}}>
                <div class="my-3 py-3">
                    <h2 class="display-5">Garrafa de 10kg.</h2>
                    <p class="lead">Compacta, ideal para el hogar y food trucks.</p>
                </div>
                <div class={className2}  style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}}>
                    <img className="img-fluid  float-center mx-auto d-block p-6 " src='./img/garrafa10.png' alt='garrafa10' style={productStyle2}></img>
                </div>
            </div>
            <div class={classWhite} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} style={{width: '100%',fontFamily:'bahnschrift'}}>
                <div class="my-3 p-3">
                    <h2 class="display-5">Cilidro de 45kg.</h2>
                    <p class="lead">Ideal para uso industrial y grandes hogares.</p>
                </div>
                <div class={className4} style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}}>
                <img className="img-fluid  float-center mx-auto d-block p-6 " src='./img/garrafa45.png' alt='garrafa10' style={productStyle}></img>
                </div>
            </div>
        {/* </div> */}
        {/* <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 "> */}
        {/* <div class={classDark} onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4} style={{width: '100%', fontFamily:'bahnschrift'}}>
                <div class="my-3 py-3">
                    <h2 class="display-5">Garrafa plástica de 15kg propano.</h2>
                    <p class="lead">Con envase plástico fácil de transportar.</p>
                </div>
                <div class={className} style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}}>
                    <img className="img-fluid rounded float-center mx-auto d-block p-6 " src='./img/garrafaPropano.png' alt='garrafa10' style={productStyle}></img>
                </div>
            </div>
            <div class={classWhite}  onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} style={{width: '100%',fontFamily:'bahnschrift'}}>
                <div class="my-3 p-3">
                    <h2 class="display-5">Garrafa de propano de 15kg.</h2>
                    <p class="lead">Ideal para autoelevadores.</p>
                </div>
                <div class={className3} style={{width: '100%', height: '40%', borderRadius: '21px 21px 0 0'}}>
                <img className="img-fluid  float-center mx-auto d-block p-6 " src='./img/garrafa15.png' alt='garrafa10' style={productStyle}></img>
                </div>
            </div>
        
           
        </div>
    </div>
    </div> */} 
    <div class="container marketing">
     <div className='m-5 text-center' style={{fontFamily: "bahnschrift", color: "#1a9dd9", marginTop: "20px"}}>
             <h1  style={{ paddingTop: "20px"}}>Nuestros productos</h1>
           </div>

<div class="row mb-5 text-center" style={{fontFamily: "bahnschrift"}}>
  <div class="col-lg-3">
  <img className="img-fluid  float-center mx-auto d-block p-6 " src='./img/garrafa10.png' alt='garrafa10' style={{width: '70%', height: '60%', marginBottom: '20px'} }></img>
    <h2 class="fw-normal">Garrafa de 10 KG</h2>
    <p>Gas Butano. Envase diseñado para uso doméstico (estufas o calefactores, cocinas, termotanques, calefones, etc.).  Muy útil para foodtrucks por su tamaño y gran rendimiento.</p>
    <p><a class="btn btn-secondary text-white" href="https://walink.co/cc031c">Hacé tu pedido &raquo;</a></p>
  </div>
  <div class="col-lg-3">
  <img className="img-fluid  float-center mx-auto d-block p-6 " src='./img/garrafa45.png' alt='garrafa10' style={{width: '170px', height: '63%', marginBottom: '2px'} }></img>
  <h2 class="fw-normal">Cilindros de 45 kg</h2>
    <p>Gas Propano. Ideal para zonas frías. Aporta mayor autonomía. Sirve para uso doméstico o industrial: calefaccionar casas, obras con soldadura de alta presión, etc.</p>
    <p><a class="btn btn-secondary text-white" href="https://walink.co/cc031c">Hacé tu pedido &raquo;</a></p>
  </div>
  <div class="col-lg-3">
  <img className="img-fluid  float-center mx-auto d-block p-6 " src='./img/garrafa15.png' alt='garrafa10' style={{width: '200px', height: '60%', marginBottom: '20px'} }></img>
   <h2 class="fw-normal">Garrafa 15 KG</h2>
    <p>Para autoelevadores. Contiene en su interior gas propano lo que aporta mayor poder calórico. Es ideal para incrementar el rendimiento de cualquier industria.</p>
    <p><a class="btn btn-secondary text-white mt-4" href="https://walink.co/cc031c">Hacé tu pedido &raquo;</a></p>
  </div>
  <div class="col-lg-3">
  <img className="img-fluid  float-center mx-auto d-block p-6 " src='./img/garrafaPropano.png' alt='garrafa10' style={{width: '170px', height: '55%', marginBottom: '49px'} }></img>
  <h2 class="fw-normal">Garrafa plástica de 15kg.</h2>
    <p>Envase 100% reciclable. Propano para autoelevadores. Su peso liviano reduce accidentes. Al ser traslúcido, permite ver el nivel de contenido y aprovecharlo al máximo.</p>
    <p><a class="btn btn-secondary text-white" href="https://walink.co/cc031c">Hacé tu pedido &raquo;</a></p>
  </div>
  </div>
  </div>
    <section  class="sectionHome ">
     
     <div class="imgSectionEmpresa"></div>
     
     <div class=" sectionHomeContent"><h3 class="sectionHomeContentTitle">Nuestro compromiso</h3><br></br><br></br>
       <div class="container row justify-content-start sectionHomeContentList">
         <div class="col-6 align-self-start">
         <p><i class="fas fa-thumbs-up"></i>  Entrega en tiempo y forma</p><br></br>
         <p><i class="fas fa-hard-hat"></i>  Sustentabilidad</p>
       </div>
       
      
         <div class="col-6 align-self-end">
         <p> <i class="fas fa-truck"></i>  Mejor precio y calidad garantizada</p><br></br>
         <p> <i class="fas fa-star"></i>   Compromiso social</p>
       </div>
       </div>
     </div>
     </section>
    
    </div>
  )
}
