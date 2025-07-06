
import type { Metadata } from 'next'
import { Inter, Gluten } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const gluten = Gluten({
  variable: '--font-gluten',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Valvaren Art',
  description:
    'Canadian 3D/traditional Sculptor & Painter with a focus on animals.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${gluten.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
