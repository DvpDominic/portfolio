import { createContext, useContext, useState, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const NavigationContext = createContext()

export function NavigationProvider({ children }) {
  const [direction, setDirection] = useState(null) // 'forward' | 'backward' | null
  const [transitioning, setTransitioning] = useState(false)
  const [displayLocation, setDisplayLocation] = useState(null)
  const timeoutRef = useRef(null)

  const startTransition = useCallback((dir) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setDirection(dir)
    setTransitioning(true)
  }, [])

  const completeTransition = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setTransitioning(false)
    }, 750)
  }, [])

  return (
    <NavigationContext.Provider
      value={{
        direction,
        transitioning,
        startTransition,
        completeTransition,
        displayLocation,
        setDisplayLocation,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavDirection() {
  return useContext(NavigationContext)
}

export function useAnimatedNavigate() {
  const navigate = useNavigate()
  const { startTransition } = useNavDirection()

  return useCallback(
    (to, dir = 'forward') => {
      startTransition(dir)
      // Small delay to let the leave animation start
      navigate(to)
    },
    [navigate, startTransition]
  )
}
