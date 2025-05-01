import { mAnimations } from '@/config/motion.config'
import { IScheduleItem } from '@/types/schedule.type'
import * as m from 'motion/react-m'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface Props {
	data: IScheduleItem
	hideLine: boolean
}

export function ScheduleItem({ data, hideLine }: Props) {
	return (
		<div className='flex items-start justify-start gap-4 md:gap-8 lg:gap-12 w-full relative'>
			<m.div
				className='flex flex-col items-center justify-center rounded-full bg-green-600 w-[45px] h-[45px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]'
				initial={mAnimations.opacity}
				whileInView={mAnimations.inView}
				transition={mAnimations.duration15}
			>
				<div className='relative flex flex-col items-center justify-center w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[35px] lg:h-[35px]'>
					<Image
						src={data.iconUrl}
						alt={data.title}
						fill
						loading='lazy'
						className='w-auto h-auto'
					/>
				</div>
			</m.div>
			<div className='flex flex-col items-start justify-center text-left'>
				<m.p
					className='text-primary text-xl md:text-2xl lg:text-3xl'
					initial={mAnimations.fadeLeft20}
					whileInView={mAnimations.inView}
					transition={mAnimations.duration05}
				>
					{data.time}
				</m.p>
				<m.p
					className='text-green-900 text-lg md:text-xl lg:text-2xl'
					initial={mAnimations.opacity}
					whileInView={mAnimations.inView}
					transition={mAnimations.duration05}
				>
					{data.title}
				</m.p>
				<m.p
					className='whitespace-pre-wrap text-md md:text-lg lg:text-xl'
					initial={mAnimations.fadeRight20}
					whileInView={mAnimations.inView}
					transition={mAnimations.duration05}
				>
					{data.description}
				</m.p>
			</div>
			<m.div
				className={twMerge(
					'bg-green-600 -z-1 h-full absolute w-[2px] top-[45px] left-[22px] md:top-[50px] md:left-[24px] lg:top-[60px] lg:left-[28px] lg:w-[4px]',
					hideLine && 'hidden'
				)}
				initial={mAnimations.opacity}
				whileInView={mAnimations.inView}
				transition={mAnimations.duration15}
			></m.div>
		</div>
	)
}
