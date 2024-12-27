import type { Metadata } from 'next'

import localFonts from 'next/font/local'

import Header from '@common/header/header'

import './globals.css'

const font = localFonts({
    src: [
        {
            path: '../../public/assets/fonts/Oswald/Oswald-ExtraLight.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../public/assets/fonts/Oswald/Oswald-Light.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../public/assets/fonts/Oswald/Oswald-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/assets/fonts/Oswald/Oswald-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/assets/fonts/Oswald/Oswald-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/assets/fonts/Oswald/Oswald-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
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
