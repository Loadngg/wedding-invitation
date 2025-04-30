import { Addressing } from '@/components/Addressing'
import { Calendar } from '@/components/Calendar'
import { DressCode } from '@/components/DressCode'
import { Footer } from '@/components/footer/Footer'
import { GuestQuest } from '@/components/guest-quest/GuestQuest'
import { Help } from '@/components/Help'
import { Intro } from '@/components/Intro'
import { Schedule } from '@/components/schedule/Schedule'
import Image from 'next/image'
import { Location } from '../components/location/Location'

export default function Home() {
	return (
		<div>
			<Intro />
			<Addressing />
			<Calendar />
			<Schedule />
			<Location />
			<DressCode />
			<GuestQuest />
			<Help />
			<div className='relative flex items-center justify-center w-full h-[100px] md:h-[125px] lg:h-[150px]'>
				<Image
					src='/rings.png'
					alt='Кольца'
					fill
					loading='lazy'
					className='object-contain'
				/>
			</div>
			<Footer />
		</div>
	)
}
