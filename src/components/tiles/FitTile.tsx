'use client'

import { useEffect } from 'react'
import { motion, useAnimate } from 'motion/react'
import { HoverCard } from '@/components/HoverCard'
import { Icons } from '@/components/icons'
import { ease, reveal } from '@/lib/motion'

const RINGS = [
  { rad: 64, pct: 0.78, color: '#ff89b1' },
  { rad: 50, pct: 0.62, color: '#5ed29a' },
  { rad: 36, pct: 0.44, color: '#8cc6ff' },
]

export function FitTile({ index = 0 }: { readonly index?: number }) {
  const [scope, animate] = useAnimate()

  const runRings = () => {
    RINGS.forEach(({ rad, pct }) => {
      const len = 2 * Math.PI * rad
      const off = (1 - pct) * len
      animate(`[data-r="${rad}"]`, { strokeDashoffset: [len, off] }, { duration: 1.6, ease })
    })
  }

  useEffect(() => { runRings() }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div className="t-fit" {...reveal(index)} ref={scope} onHoverStart={runRings}>
      <HoverCard className="fit-tile">
        <div className="card-label">{Icons.fit}Activity · today</div>
        <div className="rings-wrap">
          <svg viewBox="0 0 160 160">
            {RINGS.map(({ rad, pct, color }) => {
              const len = 2 * Math.PI * rad
              const off = (1 - pct) * len
              return (
                <g key={rad}>
                  <circle cx="80" cy="80" r={rad} fill="none" stroke={color} strokeWidth="9" opacity="0.12" />
                  <circle
                    data-r={rad}
                    cx="80" cy="80" r={rad}
                    fill="none" stroke={color} strokeWidth="9"
                    strokeLinecap="round"
                    strokeDasharray={len}
                    strokeDashoffset={off}
                    transform="rotate(-90 80 80)"
                  />
                </g>
              )
            })}
          </svg>
        </div>
        <div className="fit-foot">
          <div className="fit-stat"><div className="v">8.4k</div><div className="l">Steps</div></div>
          <div className="fit-stat"><div className="v">42m</div><div className="l">Move</div></div>
          <div className="fit-stat"><div className="v">7.2h</div><div className="l">Sleep</div></div>
        </div>
      </HoverCard>
    </motion.div>
  )
}
