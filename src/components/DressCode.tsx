import { Container } from './ui/container/Container'
import { Title } from './ui/title/Title'

export function DressCode() {
	return (
		<Container>
			<div className='flex flex-col items-center gap-6'>
				<Title>Дресс-код</Title>
				<p className='text-xl max-w-[800px]'>
					мы просим воздержаться от ярких цветов и броских принтов. Будем очень
					рады, если вы отдадите предпочтение спокойным и нейтральным тонам.
					<br />
					Также будем признательны, если в белом будет только невеста
				</p>
				<div className='flex gap-4'>
					<div className='colored-circle bg-green-900'></div>
					<div className='colored-circle bg-green-600'></div>
					<div className='colored-circle bg-[#a4d1cb]'></div>
					<div className='colored-circle bg-[#E0D9CF]'></div>
					<div className='colored-circle bg-[#D9D9E5]'></div>
					<div className='colored-circle bg-[#E8D6EE]'></div>
					<div className='colored-circle bg-[#D5C0DF]'></div>
					<div className='colored-circle bg-pink-600'></div>
					<div className='colored-circle bg-pink-900'></div>
				</div>
			</div>
		</Container>
	)
}
