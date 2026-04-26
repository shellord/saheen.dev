'use client'

import { motion } from 'motion/react'
import { HoverCard } from '@/components/HoverCard'
import { reveal } from '@/lib/motion'

export function PhotoCard({ index = 0 }: { readonly index?: number }) {
  return (
    <motion.div {...reveal(index)}>
      <HoverCard className="photo-card">
        <div className="photo-frame" />
      </HoverCard>
    </motion.div>
  )
}
