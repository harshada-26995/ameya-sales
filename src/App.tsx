import { HelmetProvider } from 'react-helmet-async'
import { AppRouter } from '@/routes'

function App() {
  return (
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  )
}

export default App
