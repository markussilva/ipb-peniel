import { Merriweather, Open_Sans } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

// Configuração das fontes
const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

// Metadados para SEO
export const metadata: Metadata = {
  title: 'Igreja Presbiteriana do Brasil Peniel',
  description: 'Comunidade centrada em Cristo, família e serviço',
  keywords: ['igreja', 'presbiteriana', 'cristã', 'comunidade', 'culto'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${merriweather.variable} ${openSans.variable}`}>
      <body className={`${openSans.className} bg-creme-50 text-azul-900 antialiased`}>
        {children}
      </body>
    </html>
  )
}
