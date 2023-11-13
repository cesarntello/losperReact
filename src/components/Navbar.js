 import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';




export const Navbar = () => {

    
// const [fixNavbar, setFixNabar] = useState()

// useEffect(() => {
//   const handleScroll =()=>{

//     setFixNabar(window.scrollY > 200);
//     console.log(window.scrollY)
//   }
//   window.addEventListener('scroll', handleScroll)
//   return () => window.removeEventListener('scroll', handleScroll)
// } )
// const scrollRef = useRef();
  const navigate = useNavigate();
  const handleProductosClick = () => {
    navigate('/'); // Redirect to home page
  
    // Wait for the home page to render before scrolling
    const waitForRender = () => {
      if (document.getElementById('Products')) {
        const productsElement = document.getElementById('Products');
        productsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        setTimeout(waitForRender, 100); // Check again if the element is rendered
      }
    };
  
    waitForRender();
  };
  
  return (
    <div>

    <header className="mb-5">
        {/* <div className="contactoHead ">
            <div className="container"> 
                <div className="row justify-content-center">   
                <a className="numeroWhatsapp col-2"  href="/"><i className="fab fa-whatsapp"></i>+54 0261 493-3111</a>
                <a className="numeroWhatsapp col-2" href="/"><i className="fas fa-envelope"></i>    info@losper.com.ar        </a>
                <a className="numeroWhatsapp col-4" href="/"><i className="fas fa-map-marker-alt"></i>Carril Rodríguez Peña 1130, M5515 Maipú, Mendoza</a>
                </div>    
            </div>
        </div> */}
        <nav className="contactoHead navbar fixed-top "style={{height:'50px', padding:'1px'}}>
            <div className="container " style={{color: 'aliceblue'}}> 
                <div className="row justify-content-center">   
                <a className="numeroWhatsapp col-4"  href="/"><i className="fab fa-whatsapp"></i>+54 261 684-7661</a>
                <a className="numeroWhatsapp col-4" href="/"><i className="fas fa-envelope"></i>    info@losper.com.ar        </a>
                <a className="numeroWhatsapp col-4" href="/"><i className="fas fa-map-marker-alt"></i>Carril Rodríguez Peña 1130, M5515 Maipú, Mendoza</a>
                </div>    
            </div>
        </nav>
        <nav className=" navbar fixed-top  navbar-expand-sm navbar-light" style={{marginTop: '33px'}} >
           

           <Link to='/'> 
                <a className="navbar-brand" href="/">
                    <img 
                    className="logoLosper" 
                    src="img/logoLosper.png" 
                    alt="ypf losper"
                    ></img>
                </a>
           </Link>
            <button 
            	className="navbar-toggler" 
            	type="button" 
            	data-bs-toggle="collapse" 
            	data-bs-target="#toggleMobileMenu" 
            	aria-controls="toggleMobileMenu" 
            	aria-expanded="false" 
            	aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="toggleMobileMenu">
                <ul className="navbar-nav ms-auto text-center">
                    <li>
                        <Link to='/'><a className="nav-link text-dark " href="/"  onClick={(event) => { window.scrollTo(0, 0)}}>Home</a></Link>
                    </li>
                    <li>
                        <Link to='/empresa'><a className="nav-link text-dark" href="."  onClick={(event) => { window.scrollTo(0, 0)}}>Nosotros</a></Link>
                    </li>
                    <li>
                        <a className="nav-link text-dark" id='scroll-btn' style={{cursor: 'pointer'}}   onClick={handleProductosClick} >Productos</a>
                    </li>
                    <li>
                        <Link to='/alcance'><a className="nav-link text-dark "  href="." onClick={(event) => { window.scrollTo(0, 0)}} >Distribución</a></Link>
                    </li>
                    <li>
                        <Link to='/formulario'><a className="nav-link text-dark" href="."  onClick={(event) => { window.scrollTo(0, 0)}}>Contacto</a></Link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="." role="button" aria-expanded="false">
                           <InfoIcon/>
                        </a>
                        <ul class="dropdown-menu">
                        <li>
                            <Link to='/preguntas'><a class="dropdown-item" href="." onClick={(event) => { window.scrollTo(0, 0)}}>Preguntas frecuentes</a></Link>
                        </li>
                        <li>
                            <Link to='/info'><a class="dropdown-item" href="." onClick={(event) => { window.scrollTo(0, 0)}}>Informacion útil</a></Link>
                        </li>
                       
                       
                        </ul>
                    </li>
                    <li>
                       <a href='https://walink.co/cc031c'><img alt='wa-icon' src="img/icons8-whatsapp-48.png"></img></a> 
                    </li>
                </ul>
                
            </div>
        </nav>
    </header>
            
    </div>
  )
}
