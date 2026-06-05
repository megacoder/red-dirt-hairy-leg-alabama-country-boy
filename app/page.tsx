"use client"

import { useState } from 'react'
import Image from 'next/image'

const CDN = 'https://galaxy-prod.tlcdn.com/gen/user_32iu0LR0JG9yzl1GNBubQI22H0l'

const ASSETS = {
  header: `${CDN}/9375521d-d4f1-428c-abf5-c91fe3831528.png`,
  icon:   `${CDN}/972701ea-b5d9-48b3-929f-aba278d1da59.png`,
}

// ── Shell Button ─────────────────────────────────────────────────
interface ShellButtonProps {
  label: string
  onClick?: () => void
}

function ShellButton({ label, onClick }: ShellButtonProps) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      className="shell-btn"
      style={{ backgroundImage: `url(${hovered ? '/shell-fired.png' : '/shell-normal.png'})` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      aria-label={label}
    >
      <span className="btn-label">{label}</span>
    </button>
  )
}

// ── News Items ───────────────────────────────────────────────────
const NEWS = [
  {
    emoji: '🎣',
    title: 'Opening Day at the Red Clay Catfish Derby',
    date: 'May 15, 2025',
    text: "A record crowd showed up down by Miller's Creek. Old man Perkins pulled in a 34-pounder before the coffee even got cold.",
  },
  {
    emoji: '🫙',
    title: 'New Batch of Pepper Jelly Ready',
    date: 'May 8, 2025',
    text: "Grandmama's jalapeño pepper jelly — twelve jars canned and sitting on the front porch stand. First come, first served.",
  },
  {
    emoji: '🏆',
    title: 'Coon Dog Duke Takes the Ribbon',
    date: 'April 30, 2025',
    text: "Old Duke finally earned his keep at the Limestone County Field Trials. Prouder than a banty rooster about the whole thing.",
  },
  {
    emoji: '🌾',
    title: 'Fall Burn Day — Creek Bottom Field',
    date: 'April 18, 2025',
    text: "Got the creek bottom field burned off just before the rains rolled in. Smelled like good country all the way to the road.",
  },
]

// ── Page ─────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="page-bg min-h-screen flex flex-col">

      {/* ── Header Banner ── */}
      <header className="w-full shrink-0 shadow-2xl">
        <Image
          src={ASSETS.header}
          alt="Red Dirt Hairy Legged Alabama Country Boy"
          width={3072}
          height={1024}
          className="w-full h-auto block"
          priority
          unoptimized
        />
      </header>

      {/* ── Main Content ── */}
      <main className="flex-1 px-4 py-8 md:py-10">
        <div className="max-w-3xl mx-auto space-y-6">

          {/* Welcome Card */}
          <div className="content-card">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-5">
              <div className="shrink-0">
                <Image
                  src={ASSETS.icon}
                  alt="Country Boy Icon"
                  width={110}
                  height={110}
                  className="rounded-full border-4 border-amber-700/40 shadow-xl"
                  unoptimized
                />
              </div>
              <div>
                <h1 className="section-heading text-3xl md:text-4xl mb-3">
                  Welcome, Y&apos;all
                </h1>
                <p className="body-text">
                  Deep in the red clay hills of Alabama, where the dirt roads wind through tall pines
                  and wood smoke hangs in the autumn air — that&apos;s home. Pull up a chair on the
                  porch, grab a jar of sweet tea, and stay a spell.
                </p>
              </div>
            </div>

            <hr className="rope-divider" />

            <p className="body-text">
              This here&apos;s the home base of the Red Dirt Hairy Legged Alabama Country Boy —
              born and raised on red clay roads, fed right on Southern cookin&apos;, and prouder than
              a banty rooster about every last bit of it. Whether you&apos;re here for the stories,
              the recipes, the hunting and fishing, or just to see what a real country boy looks like —
              you&apos;ve found the right place. Sit down. We don&apos;t bite.
            </p>
          </div>

          {/* Latest from the Holler */}
          <div className="content-card">
            <h2 className="section-heading text-2xl md:text-3xl mb-5">
              Latest from the Holler
            </h2>
            <div>
              {NEWS.map((item, i) => (
                <div key={i} className="holler-item">
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5 shrink-0">{item.emoji}</span>
                    <div>
                      <p className="item-title">{item.title}</p>
                      <p className="item-date">{item.date}</p>
                      <p className="body-text mt-1 text-sm">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About strip */}
          <div className="content-card">
            <h2 className="section-heading text-xl mb-3">About This Site</h2>
            <p className="body-text text-sm">
              Red Dirt Country is a celebration of rural Alabama life — the food, the land, the dogs,
              the critters, the old trucks, the family, and the dirt under your boots. No pretense.
              No city nonsense. Just honest Southern living, straight from the holler to your screen.
            </p>
          </div>

        </div>
      </main>

      {/* ── Shell Button Footer ── */}
      <footer className="py-8 px-4 mt-2">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          <ShellButton label="Back" />
          <ShellButton label="Next" />
          <ShellButton label="Help" />
        </div>
        <p className="text-center mt-5 text-amber-900/60 text-xs font-light tracking-widest uppercase">
          © 2025 Red Dirt Hairy Legged Alabama Country Boy · All Rights Reserved
        </p>
      </footer>

    </div>
  )
}
