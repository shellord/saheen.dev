'use client'

import { motion } from 'motion/react'
import { HoverCard } from '@/components/HoverCard'
import { Icons } from '@/components/icons'
import { reveal } from '@/lib/motion'

export function AboutCard({ index = 0 }: { readonly index?: number }) {
  return (
    <motion.div {...reveal(index)}>
      <HoverCard className="about-card">
        <div className="who">
          <div className="avatar" />
          <div>
            <h2 className="greet">Hey, I&apos;m Saheen 👋</h2>
            <div className="role">Design engineer · Kochi, IN</div>
          </div>
        </div>
        <p>
          Building <em>small, sharp</em> products on the web. Currently heads-down on Halide — a
          realtime collaboration runtime.
        </p>
        <div className="sb-socials">
          <a href="https://github.com/shellord" target="_blank" rel="noreferrer" title="GitHub">
            {Icons.github}
          </a>
          <a href="https://x.com/shell0rd" target="_blank" rel="noreferrer" title="X">
            {Icons.x}
          </a>
          <a href="mailto:saheenshoukath@gmail.com" title="Email">{Icons.mail}</a>
          <a href="/rss.xml" title="RSS">{Icons.rss}</a>
        </div>
      </HoverCard>
    </motion.div>
  )
}
