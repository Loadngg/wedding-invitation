'use client'

import { ReactElement, useEffect, useState } from 'react'
import { Container } from '../ui/container/Container'
import { Title } from '../ui/title/Title'
import { GuestForm } from './guest-form/GuestForm'

export function GuestQuest() {
	const [forms, setForms] = useState<ReactElement[]>([])

	const addForm = () => {
		const id = forms.length
		setForms([...forms, <GuestForm key={id} id={id} closeForm={removeForm} />])
	}

	const removeForm = (id: number) => {
		setForms(forms.filter(form => form.key !== id.toString()))
	}

	useEffect(() => {
		addForm()
	}, [])

	return (
		<Container>
			<div className='flex flex-col items-center gap-6'>
				<Title>Анкета гостя</Title>
				<div className='flex flex-col gap-6'>{forms}</div>
				<button onClick={addForm} className='button'>
					Добавить гостя
				</button>
			</div>
		</Container>
	)
}
