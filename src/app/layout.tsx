import type { Metadata } from 'next'

import { Oswald } from 'next/font/google'
import Header from '@component/header/header'

import './globals.css'

const font = Oswald({
    weight: ['200', '300', '400', '500', '600', '700'],
    style: 'normal',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Anushervon',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={font.className}>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    )
}
