'use client'

import { motion } from 'motion/react'
import { HoverCard } from '@/components/HoverCard'
import { Icons } from '@/components/icons'
import { reveal } from '@/lib/motion'

const codeItems = [
  { icon: Icons.vsc, label: 'VS Code', tag: 'Editor' },
  { icon: Icons.term, label: 'Ghostty', tag: 'Terminal' },
  { icon: Icons.github, label: 'GitHub', tag: 'Repos' },
  { icon: Icons.lin, label: 'Linear', tag: 'Tasks' },
]

const equipItems = [
  { icon: Icons.use, label: 'MacBook M1 Pro', tag: 'Laptop' },
  { icon: Icons.use, label: 'Gigabyte 32U', tag: 'Monitor' },
  { icon: Icons.term, label: 'Rainky 75', tag: 'Keyboard' },
  { icon: Icons.camera, label: 'iPhone 16 Pro Max', tag: 'Phone' },
]

function UseCol({ title, items }: { readonly title: string; readonly items: typeof codeItems }) {
  return (
    <div className="use-col">
      <h4>{title}</h4>
      <ul>
        {items.map(({ icon, label, tag }) => (
          <li key={label}>
            <span className="ic">{icon}</span>
            {label}
            <span className="k">{tag}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function UseTile({ index = 0 }: { readonly index?: number }) {
  return (
    <motion.div className="t-use" {...reveal(index)}>
      <HoverCard className="use-tile">
        <div className="card-label">{Icons.use}What I use</div>
        <div className="use-grid">
          <UseCol title="Code" items={codeItems} />
          <UseCol title="Equipment" items={equipItems} />
        </div>
      </HoverCard>
    </motion.div>
  )
}
