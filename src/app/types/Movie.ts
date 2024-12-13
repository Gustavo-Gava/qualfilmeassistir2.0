export interface Movie {
	title: string
	description: string
	picture: string

	genre: string[]
	category: string[]

	minAgeToWatch: number
	availablePlatforms?: string[]
}
