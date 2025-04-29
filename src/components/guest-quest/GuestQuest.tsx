'use client'

import { answerService } from '@/services/answer.service'
import { IAnswer, IAnswerFormData } from '@/types/answer.type'
import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Container } from '../ui/container/Container'
import { Title } from '../ui/title/Title'
import { GuestErrors, Presence } from './guest-form/guest-form.data'
import { GuestForm } from './guest-form/GuestForm'

export function GuestQuest() {
	const [formsData, setFormsData] = useState<IAnswerFormData[]>([])
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const nextId = useRef(0)

	const addForm = () => {
		const newForm: IAnswerFormData = {
			id: nextId.current,
			name: '',
			presence: Presence.YES,
			alcohol: [],
			errors: [],
		}
		nextId.current += 1
		setFormsData([...formsData, newForm])
	}

	const removeForm = (id: number) => {
		setFormsData(formsData.filter(form => form.id !== id))
	}

	const updateName = (id: number, name: string) => {
		setFormsData(prevForms =>
			prevForms.map(form =>
				form.id === id
					? {
							...form,
							name,
							errors: form.errors.filter(e => e !== GuestErrors.Name),
					  }
					: form
			)
		)
	}

	const updatePresence = (id: number, presence: string) => {
		setFormsData(prevForms =>
			prevForms.map(form => {
				if (form.id === id) {
					const newForm = {
						...form,
						presence,
						errors: form.errors.filter(e => e !== GuestErrors.Alcohol),
						...(presence !== Presence.YES && { alcohol: [] }),
					}
					return newForm
				}
				return form
			})
		)
	}

	const updateAlcohol = (id: number, alcohol: string[]) => {
		setFormsData(prevForms =>
			prevForms.map(form =>
				form.id === id
					? {
							...form,
							alcohol,
							errors: form.errors.filter(e => e !== GuestErrors.Alcohol),
					  }
					: form
			)
		)
	}

	const validateForms = () => {
		let isValid = true
		const updatedForms = formsData.map(form => {
			const errors: string[] = []
			if (form.name.trim() === '') errors.push(GuestErrors.Name)
			if (form.presence === Presence.YES && form.alcohol.length === 0) {
				errors.push(GuestErrors.Alcohol)
			}
			if (errors.length > 0) isValid = false
			return { ...form, errors }
		})
		setFormsData(updatedForms)
		return isValid
	}

	const { mutate } = useMutation({
		mutationKey: ['guest-quest'],
		mutationFn: (data: IAnswer[]) => answerService.createAnswer(data),
		onSuccess: () => {
			setIsLoading(false)
			setIsSubmitted(true)
		},
		onError: () => {
			setIsLoading(false)
			setIsSubmitted(false)
			window.alert(GuestErrors.Sending)
		},
	})

	const handleSubmitAll = async () => {
		if (isSubmitted) return
		if (!validateForms()) return

		setIsLoading(true)
		const answers: IAnswer[] = formsData.map(form => ({
			name: form.name,
			presence: form.presence,
			alcohol: form.alcohol.join(', '),
		}))
		mutate(answers)
	}

	useEffect(() => {
		if (formsData.length === 0) addForm()
	}, [])

	return (
		<Container>
			<div className='flex flex-col items-center gap-6 relative'>
				<Title>Анкета гостя</Title>
				<Image
					src='/envelope.png'
					alt='Конверт'
					width={200}
					height={450}
					loading='lazy'
					className='absolute top-52 left-64 w-auto h-auto hidden md:block'
				/>
				<div className='flex flex-col gap-6'>
					{formsData.map(form => (
						<GuestForm
							key={form.id}
							id={form.id}
							name={form.name}
							presence={form.presence}
							alcohol={form.alcohol}
							errors={form.errors}
							isSubmitted={isSubmitted}
							onNameChange={updateName}
							onPresenceChange={updatePresence}
							onAlcoholChange={updateAlcohol}
							closeForm={removeForm}
						/>
					))}
				</div>
				<button
					onClick={addForm}
					className={twMerge(
						'button',
						isSubmitted ? 'opacity-50 pointer-events-none' : ''
					)}
				>
					Добавить гостя
				</button>
				<button
					onClick={handleSubmitAll}
					className={twMerge(
						'button',
						(isSubmitted || isLoading) && 'opacity-50 pointer-events-none'
					)}
				>
					{isSubmitted
						? 'Отправлено'
						: isLoading
						? 'Отправка...'
						: 'Отправить анкеты'}
				</button>
			</div>
		</Container>
	)
}
