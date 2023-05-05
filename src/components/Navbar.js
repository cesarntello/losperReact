 import React from 'react'
import { Link } from 'react-router-dom'
// import { scroller } from 'react-scroll'



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
  
  return (
    <div>

    <header className="">
        <div className="contactoHead ">
            {/* <div className="container"> 
                <div className="row justify-content-center">   
                <a className="numeroWhatsapp col-2"  href="/"><i className="fab fa-whatsapp"></i>+54 0261 493-3111</a>
                <a className="numeroWhatsapp col-2" href="/"><i className="fas fa-envelope"></i>    info@losper.com.ar        </a>
                <a className="numeroWhatsapp col-4" href="/"><i className="fas fa-map-marker-alt"></i>Carril Rodríguez Peña 1130, M5515 Maipú, Mendoza</a>
                </div>    
            </div> */}
        </div>
        <nav className=" navbar navbar-expand-sm navbar-light" >
           

            <a className="navbar-brand" href="/index.html"><img className="logoLosper" src="img/logoLosper.png" alt="ypf losper"></img></a>
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
                        <a className="nav-link text-dark " href="/" ><Link to='/'>Home</Link></a>
                    </li>
                    <li>
                        <a className="nav-link text-dark" href="."><Link to='/empresa'>Empresa</Link></a>
                    </li>
                    <li>
                        <a className="nav-link text-dark"   id='scroll-btn' >Productos</a>
                    </li>
                    <li>
                        <a className="nav-link text-dark " href="./views/alcance.html"><Link to='/alcance'>Alcance</Link></a>
                    </li>
                    <li>
                        <a className="nav-link text-dark" href="./views/contacto.html"><Link to='/formulario'>Contacto</Link></a>
                    </li>
                </ul>
                
            </div>
        </nav>
    </header>
            
    </div>
  )
}
