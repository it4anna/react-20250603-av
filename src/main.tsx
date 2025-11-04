import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Layout, Restaurants} from './components'
import './main.css'

// Linter: what settings to use? Didnt get about learning project settings

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <Restaurants />
   </Layout>
   </StrictMode>
)
