import { Addressing } from '@/components/addressing/Addressing'
import { Calendar } from '@/components/calendar/Calendar'
import { DressCode } from '@/components/dress-code/DressCode'
import { Footer } from '@/components/footer/Footer'
import { Help } from '@/components/help/Help'
import { Intro } from '@/components/intro/Intro'
import { Location } from '../components/location/Location'

export default function Home() {
	return (
		<div>
			<Intro />
			<Addressing />
			<Calendar />
			<Location />
			<DressCode />
			<Help />
			<Footer />
		</div>
	)
}
