import type { Metadata } from 'next'
import './globals.css'

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
            <body>
                <header></header>
                <main>{children}</main>
            </body>
        </html>
    )
}
