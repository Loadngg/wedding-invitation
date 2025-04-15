'use client'

import { useEffect, useState } from 'react'
import { ICountdownTimer } from './countdown.data'

const calculateTimeLeft = (targetDate: number): ICountdownTimer => {
	const MS_IN_SECOND = 1000
	const MS_IN_MINUTE = MS_IN_SECOND * 60
	const MS_IN_HOUR = MS_IN_MINUTE * 60
	const MS_IN_DAY = MS_IN_HOUR * 24

	const difference = targetDate - Date.now()

	if (difference <= 0) {
		return { days: 0, hours: 0, minutes: 0, seconds: 0 }
	}

	let remaining = difference

	const days = Math.floor(remaining / MS_IN_DAY)
	remaining -= days * MS_IN_DAY

	const hours = Math.floor(remaining / MS_IN_HOUR)
	remaining -= hours * MS_IN_HOUR

	const minutes = Math.floor(remaining / MS_IN_MINUTE)
	remaining -= minutes * MS_IN_MINUTE

	const seconds = Math.floor(remaining / MS_IN_SECOND)

	return { days, hours, minutes, seconds }
}

export function Countdown() {
	const targetDate = new Date('2025-07-19T15:30:00').getTime()
	const [timeLeft, setTimeLeft] = useState<ICountdownTimer>()

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft(targetDate))
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	if (!timeLeft) {
		return null
	}

	return (
		<div className='flex justify-center items-center gap-8'>
			<div className='timer-block'>
				<span className='number'>{timeLeft.days}</span>
				<span>дней</span>
			</div>
			<div className='timer-block'>
				<span className='number'>
					{timeLeft.hours.toString().padStart(2, '0')}
				</span>
				<span>часов</span>
			</div>
			<div className='timer-block'>
				<span className='number'>
					{timeLeft.minutes.toString().padStart(2, '0')}
				</span>
				<span>минут</span>
			</div>
			<div className='timer-block'>
				<span className='number'>
					{timeLeft.seconds.toString().padStart(2, '0')}
				</span>
				<span>секунд</span>
			</div>
		</div>
	)
}
