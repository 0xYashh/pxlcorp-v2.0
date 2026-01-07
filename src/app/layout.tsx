import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'pxlcorp',
  description: 'creative lab for stories, products & experiments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-pxlcorp min-h-screen">
        {children}
      </body>
    </html>
  )
}
