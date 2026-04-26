'use client'

import { motion } from 'motion/react'
import { HoverCard } from '@/components/HoverCard'
import { Icons } from '@/components/icons'
import { reveal } from '@/lib/motion'

const socials = [
  { icon: Icons.github, label: 'GitHub', href: 'https://github.com/shellord' },
  { icon: Icons.x, label: 'X / Twitter', href: 'https://x.com/shell0rd' },
  { icon: Icons.mail, label: 'Email', href: 'mailto:saheenshoukath@gmail.com' },
  { icon: Icons.rss, label: 'RSS feed', href: '/rss.xml' },
]

export function SocialsTile({ index = 0 }: { readonly index?: number }) {
  return (
    <motion.div className="t-socials" {...reveal(index)}>
      <HoverCard>
        <div className="card-label">{Icons.spark}Connect</div>
        <div className="socials-grid">
          {socials.map(({ icon, label, href }) => (
            <a
              key={label}
              className="social"
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span className="ic">{icon}</span>
              <span className="lab">
                {label}
                <span className="arr">{Icons.arrUp}</span>
              </span>
            </a>
          ))}
        </div>
      </HoverCard>
    </motion.div>
  )
}
