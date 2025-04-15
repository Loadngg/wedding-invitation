import Image from 'next/image'
import { Container } from '../ui/container/Container'

export function Help() {
	return (
		<Container>
			<div className='flex flex-col items-center gap-2'>
				<p className='text-xl'>
					По всем интересующим вас
					<br />
					вопросам вы можете связаться
				</p>
				<p className='text-lg font-bold mb-2'>По номеру</p>
				<div className='flex items-center justify-center gap-4'>
					<Image
						alt='telegram'
						src='/telegram.svg'
						width={35}
						height={35}
						loading='lazy'
					/>
					<Image
						alt='whatsapp'
						src='/whatsapp.svg'
						width={35}
						height={35}
						loading='lazy'
					/>
					<a
						href='https://wa.me/79531245186'
						target='_blank'
						rel='noopener noreferrer'
						className='text-3xl'
					>
						+7 (953) 124-51-86
					</a>
				</div>
			</div>
		</Container>
	)
}
