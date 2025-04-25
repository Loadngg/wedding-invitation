import { IScheduleItem } from '@/types/schedule.type'

export const scheduleData: IScheduleItem[] = [
	{
		iconUrl: '/icons/location.svg',
		time: '15:30',
		title: 'Сбор гостей',
		description:
			'Подарите нам свою улыбку\nи возьмите с собой\nхорошее настроение',
	},
	{
		iconUrl: '/icons/rings.svg',
		time: '16:00',
		title: 'Церемония',
		description: 'Может быть трогательно,\nразрешается всплакнуть',
	},
	{
		iconUrl: '/icons/tray.svg',
		time: '17:00',
		title: 'Банкет',
		description: 'Самое время для вкусной\nеды, танцев и развлечений',
	},
	{
		iconUrl: '/icons/fireworks.svg',
		time: '22:00 - 23:00',
		title: 'Завершение торжества',
		description: 'Надеемся, этот вечер\nвам понравится',
	},
]
