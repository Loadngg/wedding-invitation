import { IAnswer } from '@/types/answer.type'

import axios from 'axios'

class AnswerService {
	private BASE_URL

	constructor() {
		const apiUrl = process.env.NEXT_PUBLIC_API_URL
		if (!apiUrl) {
			throw new Error('NEXT_PUBLIC_API_URL is not defined')
		}

		this.BASE_URL = apiUrl
	}

	async createAnswer(data: IAnswer[]) {
		const response = await axios.post(this.BASE_URL, data)
		return response.data
	}
}

export const answerService = new AnswerService()
