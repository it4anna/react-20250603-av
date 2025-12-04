import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Layout, Restaurants, ScrollProgressBar } from './components'
import { ThemeContextProvider } from './components/ThemeToggle/ThemeContextProvider'
import './main.scss'
import { UserContextProvider } from './components/LoginButton/UserContextProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <UserContextProvider>
        <Layout>
          <ScrollProgressBar />
          <Restaurants />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Layout>
      </UserContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
)
