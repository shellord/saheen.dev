'use client'

import { motion } from 'motion/react'
import { HoverCard } from '@/components/HoverCard'
import { Icons } from '@/components/icons'
import { reveal } from '@/lib/motion'

export function PhotosTile({ index = 0 }: { readonly index?: number }) {
  return (
    <motion.div className="t-photos" {...reveal(index)}>
      <HoverCard className="photos-tile">
        <div className="photos-grid">
          <div className="ph" />
          <div className="ph" />
          <div className="ph" />
          <div className="ph" />
        </div>
        <div className="card-label">{Icons.camera}Photo journal</div>
        <div className="more">View all {Icons.arrUp}</div>
      </HoverCard>
    </motion.div>
  )
}
