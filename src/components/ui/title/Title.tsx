import type { PropsWithChildren } from 'react'

export function Title({ children }: PropsWithChildren<unknown>) {
	return <h2 className='text-7xl text-green-900'>{children}</h2>
}
