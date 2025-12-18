import { Provider } from 'react-redux'
import { Layout, Restaurants, ScrollProgressBar } from '../features'
import { ThemeContextProvider } from '../features/ThemeToggle/ThemeContextProvider'
import { UserContextProvider } from '../features/LoginButton/UserContextProvider'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          <Layout>
            <ScrollProgressBar />
            <Restaurants />
          </Layout>
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  )
}

export default App
