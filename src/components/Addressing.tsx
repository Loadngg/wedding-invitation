import { mAnimations } from '@/config/motion.config'
import * as m from 'motion/react-m'
import { Container } from './ui/container/Container'
import { Title } from './ui/title/Title'

export function Addressing() {
	return (
		<Container>
			<div className='flex flex-col items-center gap-6 mt-10'>
				<Title>Дорогие гости!</Title>
				<m.p
					className='text-center max-w-[550px] text-lg lg:text-xl'
					initial={mAnimations.fadeLeft50}
					whileInView={mAnimations.inView}
					transition={mAnimations.duration1}
				>
					Совсем скоро наша пара станет счастливой семьей, и мы будем очень
					рады, если вы разделите с нами столь значимое событие
				</m.p>
			</div>
		</Container>
	)
}
