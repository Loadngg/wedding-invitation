import Image from 'next/image'

export function Intro() {
	return (
		<div className='h-[85vh] relative'>
			<Image
				src='/intro.jpg'
				alt='intro'
				fill
				priority
				className='object-cover -z-10 brightness-50 w-auto h-auto'
			/>
			<div className='h-full flex flex-col items-center justify-center text-center text-pink-300 gap-40 lg:gap-56'>
				<h1 className='leading-[0.8] text-7xl md:text-8xl lg:text-9xl'>
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
