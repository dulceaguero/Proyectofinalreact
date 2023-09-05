import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Header } from './componentes/Header/Header.jsx'
import { Segundo } from './componentes/Segundo/Segundo.jsx'
import { About } from './componentes/About/About.jsx'
import { Travelcard } from './componentes/Travelcard/Travelcard.jsx'
import { Photostravel } from './componentes/Photostravel/Photostravel.jsx'
import { Guides } from './componentes/Guides/Guides.jsx'
import { Recenttravel } from './componentes/Recenttravel/Recenttravel.jsx'
import { Feedback } from './componentes/Feedback/Feedback.jsx'
import { Opinions } from './componentes/Opinions/Opinions.jsx'
import { Contact } from './componentes/Contact/Contact.jsx'
import { Footer } from './componentes/Footer/footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header />
    <Segundo />
    <About />
    <Travelcard />
    <Photostravel />
    <Guides />
    <Recenttravel />
    <Feedback />
    <Opinions />
    <Contact />
    <Footer />


  </React.StrictMode>
)
