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
				<p className='text-center text-green-900 text-xl md:text-2xl lg:text-3xl'>
					Суббота 19 июля 2025
				</p>
				<div className='flex flex-col items-center justify-center relative gap-6 md:gap-8 lg:gap-16'>
					{scheduleData.map((data, index) => (
						<ScheduleItem
							data={data}
							key={index}
							hideLine={index === scheduleData.length - 1}
						/>
					))}
					<Image
						src='/glasses.png'
						alt='Бокалы'
						width={200}
						height={450}
						loading='lazy'
						className='absolute opacity-80 w-auto h-auto bottom-8 -right-12 lg:-right-24'
					/>
				</div>
			</div>
		</Container>
	)
}
