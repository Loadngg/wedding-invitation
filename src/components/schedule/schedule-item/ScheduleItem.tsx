import { IScheduleItem } from '@/types/schedule.type'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface Props {
	data: IScheduleItem
	hideLine: boolean
}

export function ScheduleItem({ data, hideLine }: Props) {
	return (
		<div className='flex items-start justify-start gap-12 w-full relative'>
			<div className='flex flex-col items-center justify-center rounded-full bg-green-600 w-[60px] h-[60px]'>
				<Image
					src={data.iconUrl}
					alt={data.title}
					width={35}
					height={35}
					loading='lazy'
				/>
			</div>
			<div className='flex flex-col items-start justify-center text-left'>
				<p className='text-3xl text-green-900'>{data.time}</p>
				<p className='text-2xl text-green-600'>{data.title}</p>
				<p className='text-xl whitespace-pre-wrap'>{data.description}</p>
			</div>
			<div
				className={twMerge(
					'bg-green-600 w-[4px] -z-1 h-full absolute top-[60px] left-[28px]',
					hideLine && 'hidden'
				)}
			></div>
		</div>
	)
}
