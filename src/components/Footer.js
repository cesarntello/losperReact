import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div>

<footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <a href="/"><img className="logoLosperFooter" src="img/logoFooter.png" alt="link-logo"></img></a>
              <p className="text-justify">Somos una empresa con más de 20 años de experiencia, la distribuidora oficial de YPF  más grande de la región. Nuestra prioridad es llevar nuestros productos hasta la puerta de tu vivienda o comercio de la forma mas segura. </p>
              <div className="contactoFooter ">
                <div className="container contactoFooter"> 
                    <div className="row justify-content-center">   
                    <a className="numeroWhatsapp col-4" href='https://walink.co/cc031c'><i className="fab fa-whatsapp"></i>+54 261 684-7661</a>
                    <a className="numeroWhatsapp col-4" href="/"><i className="fas fa-envelope"></i>    info@losper.com.ar        </a>
                    <a className="numeroWhatsapp col-8" href="https://maps.app.goo.gl/n1LjR9B9ecxTKU6m6"><i className="fas fa-map-marker-alt"></i>Carril Rodríguez Peña 1130, M5515 Maipú, Mendoza</a>
                    </div>    
                </div>
               </div>
            </div>
  
            <div className="col-xs-6 col-md-3">
            <h6>Empresa</h6>
              <ul className="footer-links">
                <li><Link to='/empresa'><a href="." onClick={(event) => { window.scrollTo(0, 0)}}>Acerca de nosotros</a></Link></li>
                <li><Link to='/'><a href="." onClick={(event) => { window.scrollTo(0,2000)}}>Nuestros Productos</a></Link></li>
                <li><Link to='/alcance'><a href="." onClick={(event) => { window.scrollTo(0, 0)}}>Cobertura geográfica</a></Link></li>
                <li><Link to='/empresa'><a href="." onClick={(event) => { window.scrollTo(0, 50000)}}>Visión</a></Link></li>
                
              </ul>
            </div>
  
            <div className="col-xs-6 col-md-3">
              {/* <h6>Quick Links</h6> */}
              <h6>Ypf GAS</h6>
              <ul className="footer-links">
                <li><Link to='/preguntas'><a href="." onClick={(event) => { window.scrollTo(0, 0)}}>Preguntas frecuentes</a></Link></li>
                <li><Link to='/info'><a href="." onClick={(event) => { window.scrollTo(0, 0)}}>Informacion útil</a></Link></li>
                <li><a href="https://www.ypf.com/Paginas/home.aspx">Web oficial YPF GAS</a></li>
                <li><Link to='/info'><a href="." onClick={(event) => { window.scrollTo(0, 0)}}>Medidas de seguridad</a></Link></li>
                
              </ul>
            </div>
            
          </div>
          <hr></hr>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
           <a href="/"> Losper S.A.</a>.
              </p>
            </div>
  
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="https://www.facebook.com/losperypfgas"><i className="fa fa-facebook"></i></a></li>
               
                <li><a className="dribbble" href="https://www.instagram.com/ypfgaslosper/"><i className="fa fa-instagram"></i></a></li>
                <li><a className="linkedin" href="https://www.linkedin.com/company/losper/"><i className="fa fa-linkedin"></i></a></li>   
              </ul>
            </div>
          </div>
        </div>
  </footer>

    </div>
  )
}
