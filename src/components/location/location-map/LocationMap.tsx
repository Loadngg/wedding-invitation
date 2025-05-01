import { mAnimations } from '@/config/motion.config'
import * as m from 'motion/react-m'

interface Props {
	onClose: () => void
}

export function LocationMap({ onClose }: Props) {
	return (
		<m.div
			className='fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-40'
			onClick={onClose}
			initial={mAnimations.opacity}
			whileInView={mAnimations.inView}
			transition={mAnimations.duration05}
		>
			<div
				className='bg-white rounded-lg shadow-xl relative w-full max-w-full lg:max-w-4xl h-[600px]'
				onClick={e => e.stopPropagation()}
			>
				<button
					onClick={onClose}
					className='absolute z-50 w-12 h-12 bg-pink-600 text-primary rounded-full shadow-lg cursor-pointer hover:bg-pink-300 transition-colors right-4 top-4 lg:-right-12 lg:-top-12'
				>
					<span className='text-2xl'>×</span>
				</button>

				<div className='w-full h-full rounded-lg flex items-center justify-center'>
					<div className='relative overflow-hidden w-full'>
						<a
							className='absolute top-0 text-sm'
							href='https://yandex.ru/maps/org/aviator/201355573132/?utm_medium=mapframe&utm_source=maps'
						>
							Авиатор
						</a>
						<a
							className='absolute top-3.5 text-sm'
							href='https://yandex.ru/maps/10802/tambov-oblast/category/resort/184106400/?utm_medium=mapframe&utm_source=maps'
						>
							База, дом отдыха в Тамбовской области
						</a>
						<a
							className='absolute top-7 text-sm'
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
			</div>
		</m.div>
	)
}
