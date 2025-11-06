import {Header} from './Header'
import {Footer} from './Footer'

export const Layout = ({children}: any) => (
  <>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
  </>
)
