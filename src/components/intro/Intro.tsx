import Image from 'next/image'

export function Intro() {
	return (
		<div className='h-[85vh] relative'>
			<Image
				src='/intro.jpg'
				alt='intro'
				fill={true}
				className='object-cover -z-10 brightness-70'
			/>
			<div className='h-full flex flex-col items-center justify-center gap-32 text-center text-pink-300'>
				<h1 className='text-9xl leading-[0.8]'>
					Ярослав
					<br />и<br />
					Ксения
				</h1>
				<div className='uppercase flex flex-col gap-4 text-lg tracking-[3px]'>
					<p>
						Приглашаем вас
						<br />
						на нашу свадьбу!
					</p>
					<p>19 июля 2025</p>
					<p>15:30</p>
				</div>
			</div>
		</div>
	)
}
