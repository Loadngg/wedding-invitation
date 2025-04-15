import type { PropsWithChildren } from 'react'

export function MainWrapper({ children }: PropsWithChildren<unknown>) {
	return <div className='overflow-scroll max-h-screen'>{children}</div>
}
