import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

export default function Footer() {
  return (
    <>
      <footer className="page-footer font-small white pt-4 sticky-bottom" style={{ backgroundColor: "#350067", color: "#ffffff" }}>
        <div class="container">
          <div class="row align-items-center text-center text-md-start">
            <div class="col-md-4 mb-4 mb-md-0">
              <p class="h5 mb-3"> Ludorum && Code</p>
              <p class="h5"> Te ayudamos a resolver problemas, mediante soluciones tecnologicas, para llevar tu negocio al siguiente nivel</p>
            </div>


            <div class="col-md-4 text-center mb-4 mb-md-0">
              <img src="assets/32_32_Logo_Ludorum.png" class="rounded-circle shadow mb-2"
                style={{ width: "120px" }} />
              <h4 class="fw-bold">Ludorum && Code</h4>
            </div>

            <div class="col-md-4 text-center text-md-end">
              <h5 class="fw-bold mb-3">¡Contactanos por estos medios!</h5>
              <div class="d-flex justify-content-center justify-content-md-end gap-3">
                <a href="mailto:angeldl06@gmail.com"
                  class="social-icon-footer envelope-hover text-white bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                  style={{ width: "45px", height: "45px", color: "#1877F2" }}><FontAwesomeIcon icon="fa-solid fa-envelope" /></a>
                <a href="tel:8711324475"
                  class="social-icon-footer phone-hover text-white bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                  style={{ width: "45px", height: "45px", color: "#FF1493" }}><FontAwesomeIcon icon="fa-solid fa-phone" /></a>
                <a href="https://wa.me/8711324475"
                  class="social-icon-footer wa-hover text-white bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                  style={{ width: "45px", height: "45px", color: "#25D366" }}><FontAwesomeIcon icon="fa-brands fa-whatsapp" /></a>
              </div>
            </div>
          </div>

          <div class="text-center mt-5 pt-4 border-top border-white border-opacity-25">
            <small>&copy; Copyright 2026 - Ludorum && Code - Todos los derechos reservados</small>
          </div>
        </div >
      </footer >
    </>
  );
}