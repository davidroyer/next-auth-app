import { Provider } from 'next-auth/client'
import '../styles.css'

const App = ({ Component, pageProps }) => {
  const { session } = pageProps
  console.log('process.env.SITE', process.env.SITE);

  return (
    <Provider options={{ site: process.env.SITE }} session={session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
