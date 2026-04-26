'use client'

import { motion } from 'motion/react'
import { HoverCard } from '@/components/HoverCard'
import { Icons } from '@/components/icons'
import { reveal } from '@/lib/motion'

export function ListenTile({ index = 0 }: { readonly index?: number }) {
  return (
    <motion.div className="t-listen" {...reveal(index)}>
      <HoverCard>
        <div className="card-label">
          {Icons.music}Now playing
          <span className="bars" style={{ marginLeft: 8 }}>
            <span /><span /><span /><span />
          </span>
        </div>
        <div className="listen-row">
          <div className="cover-art" />
          <div className="listen-meta">
            <div className="title">Old Friends</div>
            <div className="artist">Nils Frahm · Old Friends New Friends</div>
          </div>
        </div>
      </HoverCard>
    </motion.div>
  )
}
