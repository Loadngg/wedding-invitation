import { mAnimations } from '@/config/motion.config'
import * as m from 'motion/react-m'
import { Container } from './ui/container/Container'
import { Title } from './ui/title/Title'

export function DressCode() {
	return (
		<Container>
			<div className='flex flex-col items-center gap-6'>
				<Title>Дресс-код</Title>
				<m.p
					className='max-w-[800px] text-md md:text-lg lg:text-xl'
					initial={mAnimations.opacity}
					whileInView={mAnimations.inView}
					transition={mAnimations.duration1}
				>
					мы просим воздержаться от ярких цветов и броских принтов. Будем очень
					рады, если вы отдадите предпочтение спокойным и нейтральным тонам.
					<br />
					Также будем признательны, если в белом будет только невеста
				</m.p>
				<div className='flex flex-col items-center justify-center gap-4 mb-4'>
					<m.p
						className='uppercase font-bold text-lg md:text-xl lg:text-2xl'
						initial={mAnimations.opacity}
						whileInView={mAnimations.inView}
						transition={mAnimations.duration1}
					>
						леди
					</m.p>
					<m.div
						className='flex flex-wrap items-center justify-center gap-4'
						initial={mAnimations.fadeLeft20}
						whileInView={mAnimations.inView}
						transition={mAnimations.duration1}
					>
						<div className='colored-circle bg-green-900'></div>
						<div className='colored-circle bg-green-600'></div>
						<div className='colored-circle bg-[#a4d1cb]'></div>
						<div className='colored-circle bg-[#E0D9CF]'></div>
						<div className='colored-circle bg-[#D9D9E5]'></div>
						<div className='colored-circle bg-[#E8D6EE]'></div>
						<div className='colored-circle bg-[#D5C0DF]'></div>
						<div className='colored-circle bg-pink-600'></div>
						<div className='colored-circle bg-pink-900'></div>
					</m.div>
				</div>
				<div className='flex flex-col items-center justify-center gap-4'>
					<m.p
						className='uppercase font-bold text-lg md:text-xl lg:text-2xl'
						initial={mAnimations.opacity}
						whileInView={mAnimations.inView}
						transition={mAnimations.duration1}
					>
						джентльмены
					</m.p>
					<m.div
						className='flex flex-wrap items-center justify-center gap-4'
						initial={mAnimations.fadeRight20}
						whileInView={mAnimations.inView}
						transition={mAnimations.duration1}
					>
						<div className='colored-circle bg-[#3A3A3A]'></div>
						<div className='colored-circle bg-[#A5A5A5]'></div>
						<div className='colored-circle bg-[#8C6D58]'></div>
						<div className='colored-circle bg-[#303F2A]'></div>
					</m.div>
				</div>
			</div>
		</Container>
	)
}
