import React from 'react'

export const Footer = () => {
  return (
    <div>

<footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <a href="/"><img className="logoLosperFooter" src="img/logoFooter.png" alt="link-logo"></img></a>
              <p className="text-justify">Somos una empresa con mas de 20 años de experiencia, la distribuidora oficial de YPF  mas grande de la región. Nuestra prioridad es llevar hasta la puerta de tu vivienda o comercio de la forma mas segura. </p>
            </div>
  
            <div className="col-xs-6 col-md-3">
              
            </div>
  
            <div className="col-xs-6 col-md-3">
              {/* <h6>Quick Links</h6> */}
              <h6>Empresa</h6>
              <ul className="footer-links">
                <li><a href="http://scanfcode.com/category/c-language/">Acerca de nosotros</a></li>
                <li><a href="http://scanfcode.com/category/front-end-development/">Nuestros Productos</a></li>
                <li><a href="http://scanfcode.com/category/back-end-development/">Cobertura geográfica</a></li>
                <li><a href="http://scanfcode.com/category/java-programming-language/">Visión</a></li>
                
              </ul>
            </div>
          </div>
          <hr></hr>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
           <a href="/">Losper S.A.</a>.
              </p>
            </div>
  
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="https://www.facebook.com/losperypfgas"><i className="fa fa-facebook"></i></a></li>
               
                <li><a className="dribbble" href="https://www.instagram.com/ypfgaslosper/"><i className="fa fa-instagram"></i></a></li>
                <li><a className="linkedin" href="/"><i className="fa fa-linkedin"></i></a></li>   
              </ul>
            </div>
          </div>
        </div>
  </footer>

    </div>
  )
}
