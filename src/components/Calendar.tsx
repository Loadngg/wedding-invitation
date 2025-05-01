import { mAnimations } from '@/config/motion.config'
import * as m from 'motion/react-m'
import Image from 'next/image'
import { Container } from './ui/container/Container'
import { Title } from './ui/title/Title'

const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

const calendarData = [
	['', 1, 2, 3, 4, 5, 6],
	[7, 8, 9, 10, 11, 12, 13],
	[14, 15, 16, 17, 18, 19, 20],
	[21, 22, 23, 24, 25, 26, 27],
	[28, 29, 30, 31, '', '', ''],
]

export function Calendar() {
	return (
		<Container>
			<div className='flex flex-col items-center gap-6 w-fit p-8 -mt-8 mx-auto'>
				<Title>Июль</Title>
				<m.div
					className='relative'
					initial={mAnimations.fadeRight50}
					whileInView={mAnimations.inView}
					transition={mAnimations.duration1}
				>
					<div className='absolute top-3 -left-16 w-[250px] h-[200px] md:w-[350px] md:h-[300px] md:-top-3 md:-left-24 lg:w-[425px] lg:h-[375px] lg:-top-6 lg:-left-20'>
						<Image
							src='/angel.png'
							alt='Купидон'
							fill
							loading='lazy'
							className='object-contain opacity-80 -rotate-2'
						/>
					</div>
					<table>
						<thead>
							<tr className='uppercase text-lg lg:text-xl'>
								{days.map(day => (
									<th key={day}>{day}</th>
								))}
							</tr>
						</thead>
						<tbody className='text-primary/70'>
							{calendarData.map((row, rowIndex) => (
								<tr key={rowIndex}>
									{row.map((cell, cellIndex) =>
										cell === 19 ? (
											<td
												key={cellIndex}
												className={
													'relative text-xl md:text-3xl text-primary font-bold'
												}
											>
												{cell}
												<Image
													src='/heart.svg'
													alt='Сердце'
													fill
													className='absolute top-0 left-0'
												/>
											</td>
										) : (
											<td key={cellIndex}>{cell}</td>
										)
									)}
								</tr>
							))}
						</tbody>
					</table>
				</m.div>
			</div>
		</Container>
	)
}
