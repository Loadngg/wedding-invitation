import { mAnimations } from '@/config/motion.config'
import * as m from 'motion/react-m'
import Image from 'next/image'
import { Container } from '../ui/container/Container'
import { Title } from '../ui/title/Title'
import { ScheduleItem } from './schedule-item/ScheduleItem'
import { scheduleData } from './schedule.data'

export function Schedule() {
	return (
		<Container>
			<div className='flex flex-col items-center gap-6'>
				<Title>Программа дня</Title>
				<m.p
					className='text-center text-green-900 text-xl md:text-2xl lg:text-3xl'
					initial={mAnimations.fadeBottom20}
					whileInView={mAnimations.inView}
					transition={mAnimations.duration05}
				>
					Суббота 19 июля 2025
				</m.p>
				<div className='flex flex-col items-center justify-center relative gap-6 md:gap-8 lg:gap-16'>
					{scheduleData.map((data, index) => (
						<ScheduleItem
							data={data}
							key={index}
							hideLine={index === scheduleData.length - 1}
						/>
					))}
					<div className='absolute bottom-12 -right-28 w-[250px] h-[200px] md:w-[300px] md:h-[250px] md:bottom-14 md:-right-40 lg:w-[350px] lg:h-[300px] lg:-right-48 lg:bottom-12'>
						<Image
							src='/glasses.png'
							alt='Бокалы'
							fill
							loading='lazy'
							className='object-contain opacity-80'
						/>
					</div>
				</div>
			</div>
		</Container>
	)
}
