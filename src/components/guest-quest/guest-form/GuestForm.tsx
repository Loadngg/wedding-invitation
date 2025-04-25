'use client'

import { answerService } from '@/services/answer.service'
import { IAnswer } from '@/types/answer.type'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { AlcoholTypes, Presence } from './guest-form.data'

interface Props {
	id: number
	closeForm: (id: number) => void
}

export function GuestForm({ id, closeForm }: Props) {
	const [formId] = useState(id)
	const [name, setName] = useState<string>('')
	const [presence, setPresence] = useState<string>(Presence.YES)
	const [alcohol, setAlcohol] = useState<string[]>([])
	const [errors, setErrors] = useState<string[]>([])
	const [submitted, setSubmitted] = useState(false)

	const handleSubmit = (event: React.FormEvent) => {
		event?.preventDefault()

		if (submitted) return

		setErrors([])

		const newErrors: string[] = []

		if (name.length === 0) {
			newErrors.push('Введите имя')
		}

		if (presence === Presence.YES && alcohol.length === 0) {
			newErrors.push('Выберите алкоголь')
		}

		if (newErrors.length > 0) {
			setErrors(newErrors)
			return
		}

		const answer: IAnswer = {
			name: name,
			presence: presence,
			alcohol: alcohol.length > 0 ? alcohol.join(', ') : '',
		}
		answerService.createAnswer(answer)
		setSubmitted(true)
	}

	const handleAlcoholChange = (type: string) => {
		setAlcohol(prev =>
			prev.includes(type) ? prev.filter(item => item !== type) : [...prev, type]
		)
	}

	return (
		<form
			onSubmit={e => handleSubmit(e)}
			className='flex flex-col text-left gap-6'
		>
			<p className='font-bold text-xl -mb-4'>Гость {formId + 1}</p>
			<div className='question-block'>
				<label className='question-title'>Фамилия и Имя</label>
				<input
					type='text'
					name='name'
					autoComplete='off'
					placeholder='Петров Иван'
					className='rounded border py-2 px-6'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
			</div>
			<div className='question-block'>
				<p className='question-title'>Сможете ли присутствовать?</p>
				{Object.values(Presence).map(option => (
					<label key={option} className='flex items-center gap-2'>
						<input
							type='radio'
							name='presence'
							value={option}
							checked={presence === option}
							onChange={() => setPresence(option)}
						/>
						{option}
					</label>
				))}
			</div>
			<div className='question-block'>
				<label className='question-title'>Что предпочитаете из напитков?</label>
				{Object.values(AlcoholTypes).map(type => (
					<label key={type} className='flex items-center gap-2'>
						<input
							type='checkbox'
							checked={alcohol.includes(type)}
							onChange={() => handleAlcoholChange(type)}
							className='h-4 w-4 rounded border-gray-300'
						/>
						{type}
					</label>
				))}
			</div>
			<ul>
				{errors &&
					errors.map(error => (
						<li key={error} className='text-red-800'>
							{error}
						</li>
					))}
			</ul>
			<div className='flex items-center justify-center gap-4'>
				{formId !== 0 && (
					<input
						type='button'
						onClick={() => closeForm(formId)}
						className={'button button--warning'}
						value={'Удалить'}
					/>
				)}
				<input
					type='submit'
					value={'Отправить'}
					className={twMerge(
						'button',
						submitted && 'pointer-events-none opacity-40'
					)}
				/>
			</div>
		</form>
	)
}
