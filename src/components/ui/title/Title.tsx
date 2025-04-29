import type { PropsWithChildren } from 'react'

export function Title({ children }: PropsWithChildren<unknown>) {
	return (
		<h2 className='text-green-900 text-5xl md:text-6xl lg:text-7xl'>
			{children}
		</h2>
	)
}
