import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Row, Col, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
library.add(fas, far, fab)

export default function FormClient() {
    const [formData, setFormData] = useState({
        name: '',
        description_Products: '',
        selected_plan: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    function sendToWhatsapp() {
        const phone = "528711324475";
        const { name, description_Products, selected_plan, description } = formData;

        if (name.trim() === "") {
            alert("¡El nombre es un campo obligatorio, por favor llénelo!");
            return;
        }
        if (description_Products.trim() === "") {
            alert("¡El campo de la descripción de productos es obligatorio, por favor llénelo!");
            return;
        }
        if (selected_plan === "") {
            alert("¡El campo seleccionado del plan es obligatorio, por favor llénelo!");
            return;
        }
        if (description.trim() === "") {
            alert("¡El campo de descripción o dudas es obligatorio, por favor llénelo!");
            return;
        }

        const message = `¡Hola!, nuestra empresa se llama ${name}, nuestro giro de negocio es: ${description_Products}, el plan que seleccionamos y nos interesa es el de "${selected_plan}", y quisieramos saber más sobre: ${description}.`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, '_blank');
    }

    return (
        <>
            <div className="fullscreen">
                <section className="py-5 border-bottom" style={{ background: 'linear-gradient(90deg, #2D1045, #0A0510)' }}>
                    <Container className="my-5">
                        <Row className="align-items-center">
                            <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
                                <span className="badge bg-primary mb-3">
                                    Llámanos ahora y comencemos con soluciones
                                </span>
                                <h2 className="display-4 fw-bold mb-3" style={{ color: '#fff' }}>
                                    ¡Manda tu mensaje AHORA!
                                </h2>
                                <p className="lead mb-4" style={{ color: '#fff' }}>
                                    Cuéntanos qué herramienta necesitas o qué proceso quieres resolver.
                                    Te responderemos directo a WhatsApp con un diagnóstico y propuesta clara.
                                </p>
                                <p className="lead mb-4" style={{ color: '#fff' }}>
                                    Además, contamos con contacto y reuniones virtuales/presenciales
                                    para discutir sobre los mismos problemas y posibles soluciones a un
                                    mismo problema, para poder ayudarte a subir de nivel a tu negocio
                                    con un sistema hecho a tu medida y resolviendo tus necesidades.
                                </p>
                            </Col>

                            <Col lg={6} className="text-center">
                                <div className="p-4 shadow-sm rounded border" style={{ background: 'linear-gradient(90deg, #2D1045, #0A0510)' }}>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ color: '#fff' }}>Nombre de tu Empresa/Negocio</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Ej. Rocket Papas"
                                                value={formData.name}
                                                onChange={handleChange}
                                                name="name"
                                                id="wa-business"
                                                style={{ color: '#000' }}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ color: '#fff' }}>Descripción de tus productos</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Ej. muebles/ventanales"
                                                value={formData.description_Products}
                                                onChange={handleChange}
                                                name="description_Products"
                                                id="wa-products"
                                                style={{ color: '#000' }}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ color: '#fff' }}>¿Qué servicio requieren?</Form.Label>
                                            <Form.Select
                                                value={formData.selected_plan}
                                                onChange={handleChange}
                                                name="selected_plan"
                                                id="wa-plan"
                                                style={{ color: '#000' }}
                                            >
                                                <option value="">Seleccione su opción</option>
                                                <option value="Sistema Único">Sistema único</option>
                                                <option value="Mantenimiento Base">Mantenimiento base</option>
                                                <option value="Mantenimiento Avanzado">Mantenimiento avanzado</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ color: '#fff' }}>Descripción del problema/dudas que tenga</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                placeholder="Ej. Necesitamos un cotizador automático..."
                                                value={formData.description}
                                                onChange={handleChange}
                                                name="description"
                                                id="wa-description"
                                                style={{ color: '#000' }}
                                            />
                                        </Form.Group>

                                        <Button variant="outline-primary" onClick={sendToWhatsapp} type="button" className="w-100">
                                            Enviar Mensaje <FontAwesomeIcon icon="fa-brands fa-whatsapp" style={{ color: " rgb(99, 230, 190)" }} />
                                        </Button>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    );
}