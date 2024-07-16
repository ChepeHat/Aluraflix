import GlobalStyles from './styles/GlobalStyles.jsx'
import Header from './sections/Header'
import styled from 'styled-components'
import Home from './pages/Home.jsx'
import Footer from './sections/Footer/index.jsx'
import FormularioNuevo from './pages/NuevoVideo/NuevoVideo.jsx'
import VerVideo from './pages/VerVideo.jsx'

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'


const FondoGradiente = styled.div`
  background: radial-gradient(circle, rgba(62,62,65,1) 0%, rgba(0,0,0,1) 100%);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

function App() {
  return (
    <Router>
      <FondoGradiente>
        <GlobalStyles />
          <Header />
            <Routes>
              <Route path="/" element={<Home/>} />        
              <Route path="/nuevo-video" element={ <FormularioNuevo/> } />
              <Route path="/videoPlayer" element={ <VerVideo/> } />
              
            </Routes>
          <Footer />
      </FondoGradiente>
    </Router>
  )
}

export default App
