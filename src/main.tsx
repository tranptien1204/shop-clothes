import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ProductProvider from './Context/ProductProvider.tsx'
import ScrollToTop from './Components/ScrollToTop.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <ProductProvider>
          <App />
        </ProductProvider>
      </ScrollToTop>
    </BrowserRouter>
  </StrictMode>,
)

