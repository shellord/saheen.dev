"use client";

import { motion } from "motion/react";
import { HoverCard } from "@/components/HoverCard";
import { Icons } from "@/components/icons";
import { reveal } from "@/lib/motion";

const MAP_TILES = [
  [90, 59],
  [91, 59],
  [92, 59],
  [90, 60],
  [91, 60],
  [92, 60],
  [90, 61],
  [91, 61],
  [92, 61],
] as const;

export function MapTile({ index = 0 }: { readonly index?: number }) {
  return (
    <motion.div className="t-map" {...reveal(index)}>
      <HoverCard className="map-tile">
        <div className="card-label">{Icons.pin}Currently in</div>
        <div className="map-canvas">
          <div className="map-tiles" aria-hidden="true">
            {MAP_TILES.map(([x, y]) => (
              <img
                key={`${x}-${y}`}
                src={`https://a.basemaps.cartocdn.com/dark_nolabels/7/${x}/${y}.png`}
                alt=""
                loading="lazy"
              />
            ))}
          </div>
          <div className="map-shade" />
          <div className="map-grid" />
        </div>
        <div className="map-pin">
          <div className="ring" />
          <div className="inner" />
        </div>
        <div className="map-foot">
          <div className="place">Kerala</div>
          <div className="coord">9.97°N · 76.28°E</div>
        </div>
      </HoverCard>
    </motion.div>
  );
}
