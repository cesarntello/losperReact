import emailjs from '@emailjs/browser';
import React, { useRef } from 'react'

export const Form = () => {
  const formStyle ={
      marginTop: "110px"
  }
const ref = useRef();

  const sendEmail =(e) =>{

        e.preventDefault();

        emailjs.sendForm('service_fq39ws6','template_2agpz9n', ref.current,'user_yD13SsE2MmLnOGAAHDcR9').then((result) =>{
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
  }
  
  
    return (

    <div>

        <div style={formStyle} >
                <div className="container">
                    <h3 className="consultaTitle">Dejanos tu consulta</h3>
                </div>

            </div>
            <div className="container formulario">
            <form id="form" onSubmit={sendEmail} ref={ref}>
            <div className="col-9 mb-3 field">
                <label for="nombre">Nombre</label>
                <input className=" form-control" type="text" name="nombre" id="nombre"></input>
            </div>
            <div className="col-9 mb-3 field">
                <label for="reply_to">Email</label>
                <input className="form-control" type="email" name="reply_to" id="reply_to"></input>
            </div>
            <div className="col-9 mb-3 field">
                <label for="mensaje">Mensaje</label>
                <textarea className="form-control" type="text" name="mensaje" id="mensaje"></textarea>
            </div>
            

            <input type="submit" className="btn btn-primary" id="button" value="Enviar consulta" ></input>
            </form>
        </div>
        <div className="container mapsIframe ">
              <div className=" ratio ratio-4x3">
             
                
                  <iframe width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" title='map' id="gmap_canvas" src="https://maps.google.com/maps?q=losper%20s.a.&t=&z=17&ie=UTF8&iwloc=&output=embed"
                   >

                   </iframe>
                   
                   {/* <style>.mapouter{position:relative;text-align:right;height:700px;width:921px;}</style> */}
                  
                  
                 

                  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.6643787633056!2d-68.78836645145049!3d-32.93346448474205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e636544671d2b51!2sYPF%20GAS%20-%20Losper%20S.A.%20-%20Distribuidor%20Oficial!5e0!3m2!1ses-419!2sar!4v1674848039697!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              </div>
        </div> 
    </div>
  )
}
