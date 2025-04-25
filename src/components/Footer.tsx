import { Container } from './ui/container/Container'
import { Countdown } from './Countdown'

export function Footer() {
	return (
		<Container>
			<div className='flex flex-col items-center gap-4 mb-6'>
				<p className='text-lg text-center uppercase'>ждём вас через</p>
				<Countdown />
			</div>
		</Container>
	)
}
