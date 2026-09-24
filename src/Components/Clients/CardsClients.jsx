import image_Rocket from './rocket_papas.jpeg'
import image_Easy from './easy_peasy_english.jpeg'

export default function Cards_Clients() {
    return (
        <>
            <div className="py-5">
                <div className="container">
                    <div className="row g-4">

                        <div className="col-lg-6 col-md-6">
                            <div
                                className="client-card h-100"
                                style={{ backgroundColor: '#650AFF', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(101, 10, 255, 0.3)' }} id="clients">

                                <div className="text-center pt-4 pb-2">
                                    <h5 style={{ color: '#FFF', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                                        Educación & Servicios
                                    </h5>
                                </div>

                                <div className="text-center px-4">
                                    <div style={{
                                        height: '220px', backgroundColor: '#FFF', borderRadius: '16px', padding: '20px', marginBottom: '25px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <img
                                            src={image_Easy}
                                            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                        />
                                    </div>
                                </div>

                                <div className="text-center px-4 pb-4">
                                    <h2 style={{ color: '#FFF', fontSize: '1.8rem', fontWeight: '700', marginBottom: '15px' }}>
                                        Easy Peasy English
                                    </h2>

                                    <p style={{ color: '#FFF', fontSize: '1rem', lineHeight: '1.6', marginBottom: '25px', opacity: 0.9 }}>
                                        Plataforma web accesible e interactiva para la captación de alumnos y oferta de cursos.
                                    </p>
                                    <a href="https://easy-peasy-english-web-2ulj.vercel.app">
                                        <button
                                            className="btn btn-client"
                                            style={{
                                                backgroundColor: '#0a0a0a', color: '#FFF', border: 'none', borderRadius: '16px', padding: '14px 32px',
                                                fontWeight: '600', fontSize: '0.95rem', width: '100%', cursor: 'pointer', transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = '#1a1a1a';
                                                e.target.style.transform = 'translateY(-2px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = '#0a0a0a';
                                                e.target.style.transform = 'translateY(0)';
                                            }}
                                        >
                                            Ver página Web
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div
                                className="client-card h-100"
                                style={{ backgroundColor: '#650AFF', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(101, 10, 255, 0.3)' }}>
                                <div className="text-center pt-4 pb-2">
                                    <h5 style={{ color: '#FFF', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                                        Gastronomía & Retail
                                    </h5>
                                </div>

                                <div className="text-center px-4">
                                    <div style={{
                                        height: '220px', backgroundColor: '#FFF', borderRadius: '16px', padding: '20px', marginBottom: '25px', display: 'flex',
                                        alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <img
                                            src={image_Rocket}
                                            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                    </div>
                                </div>

                                <div className="text-center px-4 pb-4">
                                    <h2 style={{ color: '#FFF', fontSize: '1.8rem', fontWeight: '700', marginBottom: '15px' }}>
                                        Rocket Papas
                                    </h2>

                                    <p style={{ color: '#FFF', fontSize: '1rem', lineHeight: '1.6', marginBottom: '25px', opacity: 0.9 }}>
                                        Se implementó una página web para promocionar la franquicia y una sección administrativa.
                                    </p>

                                    <button
                                        className="btn btn-client"
                                        style={{
                                            backgroundColor: '#0a0a0a', color: '#FFF', border: 'none', borderRadius: '16px', padding: '14px 32px', fontWeight: '600',
                                            fontSize: '0.95rem', width: '100%', cursor: 'pointer', transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#1a1a1a';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = '#0a0a0a';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        Ver página Web
                                    </button>

                                    <div className="mt-3">
                                        <small style={{ color: '#FFF', opacity: 0.7 }}>
                                            *Página en desarrollo
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >

        </>
    );
}