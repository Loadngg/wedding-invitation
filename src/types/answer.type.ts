export interface IAnswer {
	name: string
	presence: string
	alcohol: string
}

export interface IAnswerFormData {
	id: number
	name: string
	presence: string
	alcohol: string[]
	errors: string[]
}
