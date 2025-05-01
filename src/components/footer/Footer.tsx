import { mAnimations } from '@/config/motion.config'
import * as m from 'motion/react-m'
import { Container } from '../ui/container/Container'
import { Countdown } from './countdown/Countdown'

export function Footer() {
	return (
		<Container>
			<m.div
				className='flex flex-col items-center gap-4 mb-6'
				initial={mAnimations.fadeBottom50}
				whileInView={mAnimations.inView}
				transition={mAnimations.duration05}
			>
				<p className='text-center uppercase text-md lg:text-lg'>
					ждём вас через
				</p>
				<Countdown />
			</m.div>
		</Container>
	)
}
