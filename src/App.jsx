import { Routes, Route } from 'react-router-dom';
import './App.css'
import Politics from './politics.jsx'
import Footer from './layout/Footer.jsx'
import HeroSection from './Components/HeroSection.jsx'
import Cards from './Components/Cards.jsx'
import Card_Us from './Components/Card/CardUs.jsx'
import Cards_Clients from './Components/Clients/CardsClients.jsx'
import NavBar from './layout/NavBar.jsx'
import FormClient from './Components/FormClient.jsx'

function App() {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <NavBar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <Cards_Clients />
                <FormClient />
                <Cards />
                <Card_Us />
              </>
            } />

            <Route path="/politics" element={<Politics />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App