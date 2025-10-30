import {Header} from './Header'
import {Footer} from './Footer'

export const Layout = ({children}: any) => (
<>
    <Header />
    <body>
      {children}
    </body>
    <Footer />
</>
)