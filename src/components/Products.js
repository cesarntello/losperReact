import React ,{ useState }from 'react'
export const Products = () => {

   
    const productStyle ={
        display: 'flex',
        with: '100%',
        height: '100%'
       
    }
    const productStyle2 ={
        display: 'flex',
        with: '80%',
        height: '80%',
        paddingTop: '70px'
    }
 
const classWhite = 'bg-light me-md-3 pt-3 w-100 px-3 pt-md-5 px-md-5 text-center text-dark overflow-hidden'
const classDark = 'bg-dark me-md-3 pt-3 w-100 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden'
const classWhiteInterior = 'bg-white shadow-sm mx-auto'
const classDarkInterior = 'bg-dark shadow-sm mx-auto'
const classCyanInterior = 'bg-cyan shadow-sm mx-auto'
    const [className, setClassName] = useState(classWhiteInterior);
    const [className2, setClassName2] = useState(classWhiteInterior);
    const [className3, setClassName3] = useState(classDarkInterior)
    const [className4, setClassName4] = useState(classDarkInterior);
  const handleMouseEnter = () => {
    setClassName2(classCyanInterior);
  };
  const handleMouseLeave = () => {
    setClassName2(classWhiteInterior);
  };
  const handleMouseEnter2 = () => {
    setClassName4(classCyanInterior);
  };
  const handleMouseLeave2 = () => {
    setClassName4(classDarkInterior);
  };
  const handleMouseEnter3 = () => {
    setClassName3(classCyanInterior);
  };
  const handleMouseLeave3 = () => {
    setClassName3(classDarkInterior);
  };
  const handleMouseEnter4 = () => {
    setClassName(classCyanInterior);
  };
  const handleMouseLeave4 = () => {
    setClassName(classWhiteInterior);
  };


  return (
    <div className='prodContainerBg'>
    <div className='container'>
           <div className='m-5 text-center' style={{fontFamily: "bahnschrift", color: "#1a9dd9"}}>
             <h1 >Nuestros productos</h1>
           </div>
        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 ">
           
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} class={classDark} style={{width: '100%', fontFamily:'bahnschrift'}}>
                <div class="my-3 py-3">
                    <h2 class="display-5">Garrafa de 10kg.</h2>
                    <p class="lead">Ideal para el hogar y food trucks.</p>
                </div>
                <div class={className2}  style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}}>
                    <img className="rounded float-center mx-auto d-block p-6 " src='./img/garrafa10.png' alt='garrafa10' style={productStyle2}></img>
                </div>
            </div>
            <div class={classWhite} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} style={{width: '100%',fontFamily:'bahnschrift'}}>
                <div class="my-3 p-3">
                    <h2 class="display-5">Cilidro de 45kg.</h2>
                    <p class="lead">Ideal para uso industrial y grandes hogares.</p>
                </div>
                <div class={className4} style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}}>
                <img className="rounded float-center mx-auto d-block p-6 " src='./img/garrafa45.png' alt='garrafa10' style={productStyle}></img>
                </div>
            </div>
        </div>
        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 ">
            <div class={classWhite}  onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} style={{width: '100%',fontFamily:'bahnschrift'}}>
                <div class="my-3 p-3">
                    <h2 class="display-5">Garrafa de propano de 15kg.</h2>
                    <p class="lead">Ideal para autoelevadores.</p>
                </div>
                <div class={className3} style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}}>
                <img className="rounded float-center mx-auto d-block p-6 " src='./img/garrafa15.png' alt='garrafa10' style={productStyle}></img>
                </div>
            </div>
            <div class={classDark} onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4} style={{width: '100%', fontFamily:'bahnschrift'}}>
                <div class="my-3 py-3">
                    <h2 class="display-5">Garrafa plástica de 15kg propano.</h2>
                    <p class="lead">Con envase plastico facil de transportar.</p>
                </div>
                <div class={className} style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}}>
                    <img className="rounded float-center mx-auto d-block p-6 " src='./img/garrafaPropano.png' alt='garrafa10' style={productStyle}></img>
                </div>
            </div>
           
        </div>
    </div>
    </div>
  )
}
