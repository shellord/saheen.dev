'use client'

import { AboutCard } from './sidebar/AboutCard'
import { FactsCard } from './sidebar/FactsCard'
import { PhotoCard } from './sidebar/PhotoCard'
import { StatusTile } from './tiles/StatusTile'
import { ListenTile } from './tiles/ListenTile'
import { MapTile } from './tiles/MapTile'
import { FitTile } from './tiles/FitTile'
import { BlogTile } from './tiles/BlogTile'
import { PhotosTile } from './tiles/PhotosTile'
import { UseTile } from './tiles/UseTile'
import { SocialsTile } from './tiles/SocialsTile'
import { ChatTile } from './tiles/ChatTile'

export default function Dashboard() {
  return (
    <div className="shell">
      <aside className="sidebar">
        <AboutCard index={0} />
        <FactsCard index={1} />
        <PhotoCard index={2} />
      </aside>
      <main className="main">
        <StatusTile index={0} />
        <ListenTile index={1} />
        <MapTile index={2} />
        <FitTile index={3} />
        <BlogTile index={4} />
        <PhotosTile index={5} />
        <UseTile index={6} />
        <SocialsTile index={7} />
        <ChatTile index={8} />
      </main>
    </div>
  )
}
