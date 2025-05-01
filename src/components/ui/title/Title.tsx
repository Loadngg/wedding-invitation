import { mAnimations } from '@/config/motion.config'
import * as m from 'motion/react-m'
import type { PropsWithChildren } from 'react'

export function Title({ children }: PropsWithChildren<unknown>) {
	return (
		<m.h2
			className='text-green-900 text-5xl md:text-6xl lg:text-7xl'
			initial={mAnimations.fadeBottom20}
			whileInView={mAnimations.inView}
			transition={mAnimations.duration1}
		>
			{children}
		</m.h2>
	)
}
