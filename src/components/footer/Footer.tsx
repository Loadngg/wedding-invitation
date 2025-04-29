import { Container } from '../ui/container/Container'
import { Countdown } from './countdown/Countdown'

export function Footer() {
	return (
		<Container>
			<div className='flex flex-col items-center gap-4 mb-6'>
				<p className='text-center uppercase text-md lg:text-lg'>
					ждём вас через
				</p>
				<Countdown />
			</div>
		</Container>
	)
}
