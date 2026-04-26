'use client'

import { useState, type ReactNode } from 'react'
import { motion, useMotionValue, useMotionTemplate, useSpring } from 'motion/react'

const MAX_TILT = 6

interface HoverCardProps {
  readonly children: ReactNode
  readonly className?: string
}

export function HoverCard({ children, className = '' }: HoverCardProps) {
  const [hovered, setHovered] = useState(false)

  // Spotlight gradient follows cursor
  const spotX = useMotionValue(0)
  const spotY = useMotionValue(0)
  const spotBg = useMotionTemplate`radial-gradient(200px circle at ${spotX}px ${spotY}px, #ffffff0c, transparent 70%)`

  // 3D tilt — spring-damped so it lags naturally behind the cursor
  const rotYRaw = useMotionValue(0)
  const rotXRaw = useMotionValue(0)
  const rotateY = useSpring(rotYRaw, { stiffness: 150, damping: 18 })
  const rotateX = useSpring(rotXRaw, { stiffness: 150, damping: 18 })

  return (
    <motion.div
      className={`card ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => {
        setHovered(false)
        rotYRaw.set(0)
        rotXRaw.set(0)
      }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width   // 0 → 1 left → right
        const y = (e.clientY - r.top) / r.height    // 0 → 1 top → bottom
        spotX.set(e.clientX - r.left)
        spotY.set(e.clientY - r.top)
        // Edge nearest to cursor recedes away from viewer
        rotYRaw.set((x - 0.5) * 2 * MAX_TILT)
        rotXRaw.set(-(y - 0.5) * 2 * MAX_TILT)
      }}
    >
      <motion.div
        className="spot"
        style={{ background: spotBg }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </motion.div>
  )
}
