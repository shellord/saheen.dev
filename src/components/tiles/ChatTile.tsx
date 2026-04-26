'use client'

import { motion } from 'motion/react'
import { HoverCard } from '@/components/HoverCard'
import { Icons } from '@/components/icons'
import { reveal } from '@/lib/motion'

const messages = [
  { author: 'maya', text: 'your essay changed how I think about tooling.', me: false },
  { author: 'arjun', text: 'Halide demo blew my mind.', me: true },
  { author: 'noor', text: 'hi from Bangalore 👋', me: false },
]

export function ChatTile({ index = 0 }: { readonly index?: number }) {
  return (
    <motion.div className="t-chat" {...reveal(index)}>
      <HoverCard className="chat-tile">
        <div className="card-label">{Icons.chat}Guestbook · 142 notes</div>
        <div className="chat-body">
          {messages.map(({ author, text, me }) => (
            <div key={author} className={`chat-msg${me ? ' me' : ''}`}>
              <strong style={me ? undefined : { color: 'var(--ink)' }}>{author}</strong>
              {' · '}{text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input placeholder="Leave a note…" />
          <button className="send">{Icons.send}</button>
        </div>
      </HoverCard>
    </motion.div>
  )
}
