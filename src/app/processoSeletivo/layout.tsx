import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Processo Seletivo',
  description: 'Página de processo seletivo do site do pet/ads @IFSP São Carlos',
}

export default function ProcessoSeletivoPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )  
}
