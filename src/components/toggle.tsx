'use client'

import { useState, ReactNode, createContext, useContext } from 'react'

const ToggleContext = createContext<{
  activeElement: string | null
  toggleElement: (id: string) => void
} | null>(null)

export function ToggleProvider({ children }: { children: ReactNode }) {
  const [activeElement, setActiveElement] = useState<string | null>(null)

  const toggleElement = (id: string) => {
    setActiveElement(activeElement === id ? null : id)
  }

  return (
    <ToggleContext.Provider value={{ activeElement, toggleElement }}>
      {children}
    </ToggleContext.Provider>
  )
}

interface ToggleProps {
  children: ReactNode
  id: string
  toggleClass?: string
  className?: string
}

export default function Toggle({
  children,
  id,
  toggleClass = 'text-flame',
  className = '',
}: ToggleProps) {
  const context = useContext(ToggleContext)

  if (!context) {
    throw new Error('Toggle must be used within a ToggleProvider')
  }

  const { activeElement, toggleElement } = context
  const isActive = activeElement === id

  return (
    <span
      className={`inline cursor-default rounded transition-colors duration-150 ${
        isActive ? toggleClass : ''
      } ${className}`}
      onClick={() => toggleElement(id)}
    >
      {children}
    </span>
  )
}
