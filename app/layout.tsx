import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agro Market - Sri Lanka',
  description: 'Direct from farmer to buyer - ගොවියාගෙන් පාරිභෝගිකයාට සෘජුවම'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="si">
      <body className="bg-[#FAFAF7] antialiased">
        {children}
      </body>
    </html>
  )
}
