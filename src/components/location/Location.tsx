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
				<Image
					src='/location.jpg'
					alt='Авиатор'
					width={400}
					height={300}
					className='object-cover brightness-80 w-auto h-auto'
				/>
				<div className='flex flex-col items-center justify-center gap-2'>
					<p>Авиатор</p>
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
