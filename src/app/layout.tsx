import { MainWrapper } from '@/components/ui/main-wrapper/MainWrapper'
import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const comfortaa = Comfortaa({
	variable: '--font-comfortaa',
	subsets: ['cyrillic', 'latin'],
	weight: ['400', '700'],
	preload: true,
})

const gogol = localFont({
	variable: '--font-gogol',
	src: '../fonts/gogol_regular.otf',
	preload: true,
})

export const metadata: Metadata = {
	title: 'Ярослав | Ксения',
	description: 'Приглашение на свадьбу',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={`${comfortaa.variable} ${gogol.variable} antialiased`}>
				<MainWrapper>{children}</MainWrapper>
			</body>
		</html>
	)
}
