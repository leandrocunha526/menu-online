import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppings = Poppins({ subsets: ['latin'], weight: "500" })

export const metadata: Metadata = {
  title: 'Cardápio online',
  description: 'Confira nosso cardápio online e faça seu pedido',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppings.className}>{children}</body>
    </html>
  )
}
