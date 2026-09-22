import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

export default function Footer() {
  return (
    <>
      <footer
        className="page-footer font-small white pt-4 sticky-bottom"
        style={{ backgroundColor: "#350067" }}
      >
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3 py-5">
              <h5 className="text-uppercase" id="title_footer">
                Ludorum && Code
              </h5>
              <p id="text_footer">
                Haciendo planes a tu lado, para que nada sea un sueño...
                <p id="text_footer">sino, una realidad el dia de mañana.</p>
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3 py-2">
              <h5 className="text-uppercase" class="word_title">
                Navegacion
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#Us" class="word">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#clients" class="word">
                    Clientes
                  </a>
                </li>
                <li>
                  <a href="#pricing" class="word">
                    Planes y precios
                  </a>
                </li>
                <li>
                  <a href="#politics" class="word">
                    Politicas de seguridad
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3 py-2">
              <h5 className="text-uppercase" class="word_title">
                Redes y Contacto
              </h5>
              <div className="d-flex gap-3 justify-content-center mt-3">
                <a
                  href="https://wa.me/528711324475"
                  class="social-icon-footer wa-hover text-white bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                  style={{ width: "45px", height: "45px", color: "#25D366" }}
                >
                  <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                </a>
                <a
                  href="mailto:angeldominguezlopez030206@gmail.com"
                  class="social-icon-footer envelope-hover text-white bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                  style={{ width: "45px", height: "45px", color: "#25D366" }}
                >
                  {" "}
                  <FontAwesomeIcon icon="fa-regular fa-envelope" />{" "}
                </a>
                <a
                  href="tel:52871324475"
                  class="social-icon-footer phone-hover text-white bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                  style={{ width: "45px", height: "45px", color: "#0abbe700" }}
                >
                  {" "}
                  <FontAwesomeIcon icon="fa-solid fa-phone" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="d-flex gap-3 justify-content-center"
          class="word_copyright"
        >
          <ul>© 2026 All Copyrights Are Reserved: Ludorum && Code.</ul>
        </div>
      </footer>
    </>
  );
}