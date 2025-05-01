import { mAnimations } from '@/config/motion.config'
import * as m from 'motion/react-m'
import Image from 'next/image'

export function Intro() {
	return (
		<div className='h-[85vh] relative'>
			<Image
				src='/intro.jpg'
				alt='intro'
				fill
				priority
				className='object-cover -z-10 brightness-50 w-auto h-auto'
			/>
			<div className='h-full flex flex-col items-center justify-center text-center text-pink-300 gap-40 lg:gap-56'>
				<h1 className='leading-[0.8] text-7xl md:text-8xl lg:text-9xl'>
					<m.p
						initial={mAnimations.fadeLeft50}
						whileInView={mAnimations.inView}
						transition={mAnimations.duration1}
					>
						Ярослав
					</m.p>
					<m.p
						initial={mAnimations.fadeBottom50}
						whileInView={mAnimations.inView}
						transition={mAnimations.duration1}
					>
						и
					</m.p>
					<m.p
						initial={mAnimations.fadeRight50}
						whileInView={mAnimations.inView}
						transition={mAnimations.duration1}
					>
						Ксения
					</m.p>
				</h1>
				<div className='uppercase flex flex-col gap-4 text-lg tracking-[3px]'>
					<m.p
						initial={mAnimations.fadeRight50}
						whileInView={mAnimations.inView}
						transition={mAnimations.duration1}
					>
						Приглашаем вас
						<br />
						на нашу свадьбу!
					</m.p>
					<m.div
						className='flex flex-col gap-4'
						initial={mAnimations.fadeBottom50}
						whileInView={mAnimations.inView}
						transition={mAnimations.duration1}
					>
						<p>19 июля 2025</p>
						<p>15:30</p>
					</m.div>
				</div>
			</div>
		</div>
	)
}
