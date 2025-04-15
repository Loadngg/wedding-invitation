import { Container } from '../ui/container/Container'
import { Title } from '../ui/title/Title'

export function Location() {
	return (
		<Container>
			<div className='flex flex-col items-center gap-6'>
				<Title>Локация</Title>
				<div className='relative overflow-hidden w-full'>
					<a
						className='absolute top-0 text-pink-50 text-sm'
						href='https://yandex.ru/maps/org/aviator/201355573132/?utm_medium=mapframe&utm_source=maps'
					>
						Авиатор
					</a>
					<a
						className='absolute top-3.5 text-pink-50 text-sm'
						href='https://yandex.ru/maps/10802/tambov-oblast/category/resort/184106400/?utm_medium=mapframe&utm_source=maps'
					>
						База, дом отдыха в Тамбовской области
					</a>
					<a
						className='absolute top-7 text-pink-50 text-sm'
						href='https://yandex.ru/maps/10802/tambov-oblast/category/tourist_camp/184106426/?utm_medium=mapframe&utm_source=maps'
					>
						Турбаза в Тамбовской области
					</a>
					<iframe
						className='relative w-full h-[600px]'
						src='https://yandex.ru/map-widget/v1/?ll=41.511849%2C52.824063&mode=search&oid=201355573132&ol=biz&z=14.58'
						loading='lazy'
					></iframe>
				</div>
			</div>
		</Container>
	)
}
