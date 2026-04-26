'use client'

import { motion } from 'motion/react'
import { HoverCard } from '@/components/HoverCard'
import { Icons } from '@/components/icons'
import { reveal } from '@/lib/motion'

export function MapTile({ index = 0 }: { readonly index?: number }) {
  return (
    <motion.div className="t-map" {...reveal(index)}>
      <HoverCard className="map-tile">
        <div className="card-label">{Icons.pin}Currently in</div>
        <div className="map-canvas">
          <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="mg" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#1c2330" />
                <stop offset="100%" stopColor="#0e1117" />
              </radialGradient>
            </defs>
            <rect width="400" height="240" fill="url(#mg)" />
            {Array.from({ length: 12 }).map((_, i) => (
              <line key={'h' + i} x1="0" x2="400" y1={i * 22} y2={i * 22} stroke="#ffffff06" strokeWidth="1" />
            ))}
            {Array.from({ length: 18 }).map((_, i) => (
              <line key={'v' + i} x1={i * 24} x2={i * 24} y1="0" y2="240" stroke="#ffffff06" strokeWidth="1" />
            ))}
            <path d="M0 90 Q 100 70 200 95 T 400 80" stroke="#3a4558" strokeWidth="2" fill="none" />
            <path d="M0 160 Q 120 180 240 155 T 400 170" stroke="#3a4558" strokeWidth="1.5" fill="none" />
            <path d="M120 0 Q 140 80 130 160 T 150 240" stroke="#3a4558" strokeWidth="1.5" fill="none" />
            <path d="M280 0 Q 290 80 285 160 T 270 240" stroke="#3a4558" strokeWidth="1.5" fill="none" />
            <text x="40" y="50" fill="#ffffff44" fontSize="9" fontFamily="Inter" letterSpacing="1">FORT KOCHI</text>
            <text x="290" y="200" fill="#ffffff44" fontSize="9" fontFamily="Inter" letterSpacing="1">VYPIN</text>
          </svg>
        </div>
        <div className="map-pin">
          <div className="ring" />
          <div className="inner" />
        </div>
        <div className="map-foot">
          <div className="place">Kochi</div>
          <div className="coord">9.97°N · 76.28°E</div>
        </div>
      </HoverCard>
    </motion.div>
  )
}
