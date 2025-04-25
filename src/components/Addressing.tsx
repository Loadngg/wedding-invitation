import { Container } from './ui/container/Container'
import { Title } from './ui/title/Title'

export function Addressing() {
	return (
		<Container>
			<div className='flex flex-col items-center gap-6 mt-10'>
				<Title>Дорогие гости!</Title>
				<p className='text-xl text-center max-w-[550px]'>
					Совсем скоро наша пара станет счастливой семьей, и мы будем очень
					рады, если вы разделите с нами столь значимое событие
				</p>
			</div>
		</Container>
	)
}
