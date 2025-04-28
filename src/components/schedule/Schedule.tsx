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
				<p className='text-3xl text-center text-green-900'>
					Суббота 19 июля 2025
				</p>
				<div className='flex flex-col items-center justify-center gap-16 relative'>
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
						className='absolute bottom-8 -right-24 opacity-80 w-auto h-auto'
					/>
				</div>
			</div>
		</Container>
	)
}
