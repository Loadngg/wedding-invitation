'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Container } from '../ui/container/Container'
import { Title } from '../ui/title/Title'
import { LocationMap } from './location-map/LocationMap'

export function Location() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<Container>
			<div className='flex flex-col items-center gap-6'>
				<Title>Локация</Title>
				<div className='relative flex items-center justify-center w-full h-[300px] md:h-[400px] lg:h-[500px]'>
					<Image
						src='/location-bg.jpg'
						alt='Авиатор'
						fill
						className='object-contain brightness-80'
					/>
				</div>
				<div className='flex flex-col items-center justify-center gap-2'>
					<a
						href='https://yandex.ru/maps/org/aviator/201355573132'
						target='_blank'
						rel='noopener noreferrer'
						className='underline transition-opacity hover:opacity-40'
					>
						Авиатор
					</a>
					<p>
						База отдыха расположена
						<br />в сосновом лесу на берегу р.Цна
					</p>
				</div>
				<button className='button' onClick={() => setIsModalOpen(true)}>
					Показать на карте
				</button>
				{isModalOpen && <LocationMap onClose={() => setIsModalOpen(false)} />}
			</div>
		</Container>
	)
}
