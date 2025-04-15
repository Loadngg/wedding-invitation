import type { PropsWithChildren } from 'react'

export function Container({ children }: PropsWithChildren<unknown>) {
	return <div className='container mx-auto p-10 text-center'>{children}</div>
}
