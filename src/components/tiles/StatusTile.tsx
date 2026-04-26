'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { HoverCard } from '@/components/HoverCard'
import { Icons } from '@/components/icons'
import { reveal } from '@/lib/motion'

function useKochiTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
    setTime(fmt())
    const id = setInterval(() => setTime(fmt()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

export function StatusTile({ index = 0 }: { readonly index?: number }) {
  const time = useKochiTime()
  return (
    <motion.div className="t-status" {...reveal(index)}>
      <HoverCard>
        <div className="card-label">{Icons.spark}Status</div>
        <div className="status-row">
          <span className="dot" />
          <span>Available for work</span>
        </div>
        <div className="status-sub">Open to short collabs · 2-week min</div>
        <div className="status-time">
          <span className="big">{time || '——'}</span>
          <span className="meta">
            Kochi · IST
            <br />
            31° humid
          </span>
        </div>
      </HoverCard>
    </motion.div>
  )
}
