import type { Metadata } from 'next'
import { Rye } from 'next/font/google'
import './globals.css'

const rye = Rye({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-rye',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Red Dirt Hairy Legged Alabama Country Boy',
  description: 'Deep in the red clay hills of Alabama — welcome to Red Dirt Country.',
  icons: {
    icon: 'https://galaxy-prod.tlcdn.com/gen/user_32iu0LR0JG9yzl1GNBubQI22H0l/d8e03374-3560-4d9a-92cf-3a465f04c5b6.png',
    apple: 'https://galaxy-prod.tlcdn.com/gen/user_32iu0LR0JG9yzl1GNBubQI22H0l/d8e03374-3560-4d9a-92cf-3a465f04c5b6.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={rye.variable}>
      <body>{children}</body>
    </html>
  )
}
