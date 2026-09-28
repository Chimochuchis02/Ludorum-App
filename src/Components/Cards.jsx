import { Card } from 'react-bootstrap';

export default function Cards() {
  const enviarWhatsApp = (tipoCotizacion) => {
    const telefono = "528711324475";

    const mensajes = {
      sistemaUnico: "Hola, me interesa cotizar el Sistema Único de Ludorum Studio. ¿Podrían darme más información?",
      mantenimientoBase: "Hola, me interesa el plan de Mantenimiento Base de Ludorum Studio. ¿Podrían darme más detalles?",
      mantenimientoAvanzado: "Hola, me interesa el plan de Mantenimiento Avanzado de Ludorum Studio. ¿Podrían agendar una llamada?",
    };

    const mensaje = mensajes[tipoCotizacion] || "Hola, me interesa conocer los servicios de Ludorum Studio.";

    const mensajeCodificado = encodeURIComponent(mensaje);

    window.open(`https://wa.me/${telefono}?text=${mensajeCodificado}`, '_blank');
  };

  return (
    <>
      <div className="row g-4 mt-5 mb-5 m-4" id="pricing">

        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
          <Card style={{ backgroundColor: "#650AFF", borderRadius: "20px" }} className="d-flex flex-column">
            <Card.Body className="d-flex flex-column">
              <Card.Title>
                <h5 style={{ color: "#FFFF" }}>Sistema Unico</h5>
              </Card.Title>
              <Card.Text>
                <h2 style={{ color: "#FFFF" }}>
                  $7,500MXN*/<small>unico</small>
                </h2>
                <p style={{ color: "#FFFF" }}>
                  * Pago unico - el sistema es 100% tuyo
                </p>
                <p style={{ color: "#FFFF" }}>
                  * Arquitectura personalizada a tu negocio (Cotizador, Catálogo o
                  Panel).
                </p>
                <p style={{ color: "#FFFF" }}>
                  * Generación automática de reportes y PDF con tu marca.
                </p>
                <p style={{ color: "#FFFF" }}>
                  * Propiedad total del cliente (cero rentas).
                </p>
              </Card.Text>
              <button style={{ borderRadius: "16px" }} onClick={() => enviarWhatsApp('sistemaUnico')}>
                Soliticar mas información
              </button>
            </Card.Body>
            <Card.Footer>
              <small style={{ color: "#FFFF" }}>
                * Los precios pueden bajar o subir dependiendo del proyecto cotizado y la complejidad.
              </small>
            </Card.Footer>
          </Card>
        </div>

        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
          <Card style={{ backgroundColor: "#650AFF", borderRadius: "20px" }} className="d-flex flex-column">
            <Card.Body className="d-flex flex-column">
              <Card.Title>
                <h5 style={{ color: "#FFFF" }}>Mantenimiento Base</h5>
              </Card.Title>
              <Card.Text>
                <h2 style={{ color: "#FFFF" }}>
                  $1,500MXN*/<small>mes</small>
                </h2>
                <p style={{ color: "#FFFF" }}>
                  * Monitoreo de servidor y base de datos
                </p>
                <p style={{ color: "#FFFF" }}>
                  * Respaldos automáticos semanales de información.
                </p>
                <p style={{ color: "#FFFF" }}>
                  * Ajustes menores mensuales (cambios de precios, textos o
                  catálogos).
                </p>
                <p style={{ color: "#FFFF" }}>
                  * Soporte técnico directo vía WhatsApp para el equipo.
                </p>
              </Card.Text>

              <button style={{ borderRadius: "16px" }} onClick={() => enviarWhatsApp('mantenimientoBase')}>
                Contratar Mantenimiento
              </button>
            </Card.Body>
            <Card.Footer>
              <small style={{ color: "#FFFF" }}>
                *Este plan solo es efectivo si se trata de un sistema creado por
                nosotros.
              </small>
            </Card.Footer>
          </Card>
        </div>

        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
          <Card style={{ backgroundColor: "#650AFF", borderRadius: "20px" }} className="d-flex flex-column">
            <Card.Body className="d-flex flex-column">
              <Card.Title>
                <h5 style={{ color: "#FFF" }}>Mantenimiento Avanzado</h5>
              </Card.Title>
              <Card.Text>
                <h2 style={{ color: "#FFF", fontWeight: "700px" }}>
                  $2,500MXN*/<small>mes</small>
                </h2>
                <p style={{ color: "#FFF" }}>* Todo lo del Mantenimiento Base.</p>
                <p style={{ color: "#FFF" }}>
                  * Desarrollo de 1 o 2 funciones nuevas o reportes extra cada
                  mes.
                </p>
                <p style={{ color: "#FFF" }}>
                  * Optimización continua de consultas y rendimiento.
                </p>
                <p style={{ color: "#FFF" }}>
                  * Respaldos diarios en la nube e informes sobre los mismos.
                </p>
              </Card.Text>
              <button style={{ borderRadius: "16px" }} onClick={() => enviarWhatsApp('mantenimientoAvanzado')}>
                ¡Escalar mi sistema AHORA!
              </button>
            </Card.Body>
            <Card.Footer>
              <small style={{ color: "#FFF" }}>
                *Este plan solo es efectivo si se trata de un sistema creado por
                nosotros.
              </small>
            </Card.Footer>
          </Card>
        </div>

      </div>
    </>
  );
}