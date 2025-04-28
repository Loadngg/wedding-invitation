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
			<Image
				src='/rings.png'
				alt='Кольца'
				width={200}
				height={450}
				loading='lazy'
				className='w-auto h-auto m-auto'
			/>
			<Footer />
		</div>
	)
}
