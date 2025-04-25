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
				<div className='flex flex-col items-center justify-center gap-16 '>
					{scheduleData.map((data, index) => (
						<ScheduleItem
							data={data}
							key={index}
							hideLine={index === scheduleData.length - 1}
						/>
					))}
				</div>
			</div>
		</Container>
	)
}
