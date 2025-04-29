import type { PropsWithChildren } from 'react'

export function Container({ children }: PropsWithChildren<unknown>) {
	return (
		<div className='container mx-auto p-6 md:p-8 lg:p-10 text-center'>
			{children}
		</div>
	)
}
