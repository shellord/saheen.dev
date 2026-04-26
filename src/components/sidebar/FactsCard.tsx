'use client'

import { motion } from 'motion/react'
import { HoverCard } from '@/components/HoverCard'
import { Icons } from '@/components/icons'
import { reveal } from '@/lib/motion'

export function FactsCard({ index = 0 }: { readonly index?: number }) {
  return (
    <motion.div {...reveal(index)}>
      <HoverCard>
        <div className="card-label">{Icons.spark}A few things</div>
        <ul className="facts">
          <li>8+ years shipping web products</li>
          <li>Half designer, half engineer</li>
          <li>Shoots 35mm on weekends</li>
          <li>Lives by GMT+5:30</li>
        </ul>
      </HoverCard>
    </motion.div>
  )
}
