import type { PropsWithChildren } from 'react'

export function MainWrapper({ children }: PropsWithChildren<unknown>) {
	return (
		<div className='relative'>
			{children}
			<img
				className='fixed top-0 left-0 -z-20 w-full h-screen object-cover'
				src='/background.jpg'
				alt='background'
			/>
		</div>
	)
}
