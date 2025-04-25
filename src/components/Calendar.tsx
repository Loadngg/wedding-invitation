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
			<div className='flex flex-col items-center gap-6 w-fit p-8 -m-8 mx-auto'>
				<Title>Июль</Title>
				<table>
					<thead>
						<tr className='uppercase text-xl'>
							{days.map(day => (
								<th key={day}>{day}</th>
							))}
						</tr>
					</thead>
					<tbody className='text-primary/70'>
						{calendarData.map((row, rowIndex) => (
							<tr key={rowIndex}>
								{row.map((cell, cellIndex) => (
									<td
										key={cellIndex}
										className={
											cell === 19 ? 'text-3xl text-primary font-bold' : ''
										}
									>
										{cell}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</Container>
	)
}
