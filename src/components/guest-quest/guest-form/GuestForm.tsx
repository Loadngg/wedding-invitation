'use client'

import { twMerge } from 'tailwind-merge'
import { AlcoholTypes, Presence } from './guest-form.data'

interface Props {
	id: number
	name: string
	presence: string
	alcohol: string[]
	errors: string[]
	isSubmitted: boolean
	closeForm: (id: number) => void
	onNameChange: (id: number, name: string) => void
	onPresenceChange: (id: number, presence: string) => void
	onAlcoholChange: (id: number, alcohol: string[]) => void
}

export function GuestForm({
	id,
	name,
	presence,
	alcohol,
	errors,
	isSubmitted,
	closeForm,
	onNameChange,
	onPresenceChange,
	onAlcoholChange,
}: Props) {
	const handleAlcohol = (type: string) => {
		const updatedAlcohol = alcohol.includes(type)
			? alcohol.filter(item => item !== type)
			: [...alcohol, type]
		onAlcoholChange(id, updatedAlcohol)
	}

	return (
		<div className='flex flex-col text-left gap-6 border p-4 rounded-lg'>
			<p className='font-bold text-xl'>Гость {id + 1}</p>
			<div className='question-block'>
				<label className='question-title'>Фамилия и Имя</label>
				<input
					type='text'
					value={name}
					onChange={e => onNameChange(id, e.target.value)}
					className='rounded border py-2 px-4 w-full'
					placeholder='Иванов Иван'
				/>
			</div>

			<div className='question-block'>
				<p className='question-title'>Сможете ли присутствовать?</p>
				{Object.values(Presence).map(option => (
					<label key={option} className='flex items-center gap-2 mb-2'>
						<input
							type='radio'
							checked={presence === option}
							onChange={() => onPresenceChange(id, option)}
							className='h-4 w-4 cursor-pointer'
						/>
						{option}
					</label>
				))}
			</div>

			{presence === Presence.YES && (
				<div className='question-block'>
					<p className='question-title'>Алкогольные предпочтения</p>
					{Object.values(AlcoholTypes).map(type => (
						<label key={type} className='flex items-center gap-2 mb-2'>
							<input
								type='checkbox'
								checked={alcohol.includes(type)}
								onChange={() => handleAlcohol(type)}
								className='h-4 w-4 rounded border-gray-300 cursor-pointer'
							/>
							{type}
						</label>
					))}
				</div>
			)}

			{errors.length > 0 && (
				<ul className='text-red-600'>
					{errors.map(error => (
						<li key={error}>⚠ {error}</li>
					))}
				</ul>
			)}

			<div
				className={twMerge(
					'flex justify-center items-center',
					id === 0 && 'hidden'
				)}
			>
				<button
					type='button'
					onClick={() => closeForm(id)}
					className={twMerge(
						'button button--warning',
						isSubmitted ? 'opacity-50 pointer-events-none' : ''
					)}
				>
					Удалить
				</button>
			</div>
		</div>
	)
}
