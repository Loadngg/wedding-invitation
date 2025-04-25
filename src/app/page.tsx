import { Addressing } from '@/components/Addressing'
import { Calendar } from '@/components/Calendar'
import { DressCode } from '@/components/DressCode'
import { Footer } from '@/components/Footer'
import { GuestQuest } from '@/components/guest-quest/GuestQuest'
import { Help } from '@/components/Help'
import { Intro } from '@/components/Intro'
import { Location } from '../components/location/Location'

export default function Home() {
	return (
		<div>
			<Intro />
			<Addressing />
			<Calendar />
			<Location />
			<DressCode />
			<GuestQuest />
			<Help />
			<Footer />
		</div>
	)
}
