import { useEffect, useRef, useState } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import { useNavDirection } from '../context/NavigationContext'
import Home from '../pages/Home'
import PortfolioDetail from '../pages/PortfolioDetail'

export default function AnimatedRoutes() {
  const location = useLocation()
  const { direction, completeTransition } = useNavDirection()
  const [animClass, setAnimClass] = useState('')
  const [currentLocation, setCurrentLocation] = useState(location)
  const prevPathRef = useRef(location.pathname)
  const containerRef = useRef(null)

  useEffect(() => {
    if (location.pathname === prevPathRef.current) return

    const scrollY = window.scrollY

    // Determine animation class based on direction
    let enterClass = ''
    if (direction === 'forward') {
      enterClass = 'page-slide-enter'
    } else if (direction === 'backward') {
      enterClass = 'page-slide-enter-reverse'
    }

    // Set CSS variable for scroll position (used in animation to keep position)
    if (containerRef.current) {
      containerRef.current.style.setProperty('--scroll-y', `-${scrollY}px`)
    }

    // Start leave animation
    let leaveClass = ''
    if (direction === 'forward') {
      leaveClass = 'page-slide-leave'
    } else if (direction === 'backward') {
      leaveClass = 'page-slide-leave-reverse'
    }

    setAnimClass(leaveClass)

    // After leave animation, swap content and play enter animation
    const leaveTimer = setTimeout(() => {
      window.scrollTo(0, 0)
      setCurrentLocation(location)
      setAnimClass(enterClass)
      completeTransition()

      // Clear animation class after enter animation completes
      const enterTimer = setTimeout(() => {
        setAnimClass('')
      }, 750)

      return () => clearTimeout(enterTimer)
    }, 350) // Leave animation duration (shorter for snappier feel)

    prevPathRef.current = location.pathname

    return () => clearTimeout(leaveTimer)
  }, [location, direction, completeTransition])

  // On first render, just show the page
  useEffect(() => {
    setCurrentLocation(location)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={containerRef}
      className={`page-transition-container ${animClass}`}
      style={{ overflow: 'hidden' }}
    >
      <Routes location={currentLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
      </Routes>
    </div>
  )
}
