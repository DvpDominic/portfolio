import { HashRouter } from 'react-router-dom'
import { NavigationProvider } from './context/NavigationContext'
import Header from './components/Header'
import AnimatedRoutes from './components/AnimatedRoutes'

function AppContent() {
  return (
    <>
      <Header />
      <main>
        <AnimatedRoutes />
      </main>
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </HashRouter>
  )
}
