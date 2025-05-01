import { mAnimations } from '@/config/motion.config'
import * as m from 'motion/react-m'
import Image from 'next/image'
import { Container } from './ui/container/Container'

export function Help() {
	return (
		<Container>
			<m.div
				className='flex flex-col items-center gap-2'
				initial={mAnimations.fadeLeft50}
				whileInView={mAnimations.inView}
				transition={mAnimations.duration1}
			>
				<p className='text-xl'>
					По всем интересующим вас
					<br />
					вопросам вы можете связаться
				</p>
				<p className='text-lg font-bold mb-2'>По номеру</p>
				<div className='flex items-center justify-center gap-4 flex-col-reverse md:flex-row'>
					<div className='flex items-center justify-center gap-4'>
						<Image
							alt='telegram'
							src='/icons/telegram.svg'
							width={35}
							height={35}
							loading='lazy'
						/>
						<Image
							alt='whatsapp'
							src='/icons/whatsapp.svg'
							width={35}
							height={35}
							loading='lazy'
						/>
					</div>
					<a
						href='https://wa.me/79531245186'
						target='_blank'
						rel='noopener noreferrer'
						className='transition-opacity hover:opacity-40 text-2xl md:text-3xl'
					>
						+7 (953) 124-51-86
					</a>
				</div>
			</m.div>
		</Container>
	)
}
