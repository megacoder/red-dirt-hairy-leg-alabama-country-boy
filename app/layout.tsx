import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Red Dirt Hairy Leg Alabama Country Boy',
  description: 'Deep in the red clay hills of Alabama — welcome to Red Dirt Country.',
  icons: {
    icon: 'https://galaxy-prod.tlcdn.com/gen/user_32iu0LR0JG9yzl1GNBubQI22H0l/d8e03374-3560-4d9a-92cf-3a465f04c5b6.png',
    apple: 'https://galaxy-prod.tlcdn.com/gen/user_32iu0LR0JG9yzl1GNBubQI22H0l/d8e03374-3560-4d9a-92cf-3a465f04c5b6.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Rye&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
