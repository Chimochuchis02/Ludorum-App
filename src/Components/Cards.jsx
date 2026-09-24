import { CardGroup, Card } from 'react-bootstrap';

export default function Cards() {
  return (
    <>
      <CardGroup style={{ padding: "75px" }} className="gap-5" id="pricing">
        <Card style={{ backgroundColor: "#650AFF", borderRadius: "20px" }}>
          <Card.Body>
            <Card.Title>
              {" "}
              <h5 style={{ color: "#FFFF" }}>Sistema Unico</h5>{" "}
            </Card.Title>
            <Card.Text>
              <h2 style={{ color: "#FFFF" }}>
                $7,500MXN*/<small>unico</small>{" "}
              </h2>
              <p style={{ color: "#FFFF" }}>
                * Pago unico - el sistema es 100% tuyo{" "}
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
            <button style={{ borderRadius: "16px" }}>
              Soliticar mas información
            </button>
          </Card.Body>
          <Card.Footer>
            <small style={{ color: "#FFFF" }}>
              {" "}
              * ¡Disfruta tambien del 50% de este plan y los demas planes.
            </small>
          </Card.Footer>
        </Card>

        <Card style={{ backgroundColor: "#650AFF", borderRadius: "20px" }}>
          <Card.Body>
            <Card.Title>
              {" "}
              <h5 style={{ color: "#FFFF" }}>Mantenimiento Base</h5>{" "}
            </Card.Title>
            <Card.Text>
              <h2 style={{ color: "#FFFF" }}>
                {" "}
                $1,500MXN*/<small>mes</small>{" "}
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

            <button style={{ borderRadius: "16px" }}>
              Contratar Mantenimiento
            </button>
          </Card.Body>
          <Card.Footer>
            <small style={{ color: "#FFFF" }}>
              *Este plan solo es efectivo si se trata de un sistema creado por
              nosotros.{" "}
            </small>
          </Card.Footer>
        </Card>

        <Card style={{ backgroundColor: "#650AFF", borderRadius: "20px" }}>
          <Card.Body>
            <Card.Title>
              {" "}
              <h5 style={{ color: "#FFF" }}>Mantenimiento Avanzado</h5>{" "}
            </Card.Title>
            <Card.Text>
              <h2 style={{ color: "#FFF", fontWeight: "700px" }}>
                {" "}
                $2,500MXN*/<small>mes</small>{" "}
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
            <button style={{ borderRadius: "16px" }}>
              ¡Escalar mi sistema AHORA!
            </button>
          </Card.Body>
          <Card.Footer>
            <small style={{ color: "#FFF" }}>
              *Este plan solo es efectivo si se trata de un sistema creado por
              nosotros.{" "}
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
}