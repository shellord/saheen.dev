'use client'

import { motion } from 'motion/react'
import { HoverCard } from '@/components/HoverCard'
import { Icons } from '@/components/icons'
import { reveal } from '@/lib/motion'

export function BlogTile({ index = 0 }: { readonly index?: number }) {
  return (
    <motion.div className="t-blog" {...reveal(index)}>
      <HoverCard className="blog-tile">
        <div className="card-label">{Icons.pen}Latest essay</div>
        <div>
          <h3>The quiet power of a boring stack.</h3>
          <p>
            On choosing tools you can sleep with — and why &quot;boring&quot; is a feature, not a bug.
          </p>
        </div>
        <div className="blog-foot">
          <div className="meta">Jan 2026 · 9 min</div>
          <a className="read" href="/blog/boring-stack">
            Read essay <span className="arr">{Icons.arr}</span>
          </a>
        </div>
      </HoverCard>
    </motion.div>
  )
}
