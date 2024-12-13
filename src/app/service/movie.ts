import { Movie } from "../types/Movie"
import { MovieUserInput } from "../types/MovieUserInput"

const movies: Movie[] = [
	{
		title: "O Jogo da Imitação",
		description:
			"Durante a Segunda Guerra Mundial, o governo britânico monta uma equipe que tem por objetivo quebrar o Enigma, o famoso código que os alemães usam para enviar mensagens aos submarinos",
		picture: "https://upload.wikimedia.org/wikipedia/pt/1/1a/O_Jogo_da_Imita%C3%A7%C3%A3o.jpg",
		minAgeToWatch: 12,
		genre: ["drama", "cinebiografia"],
		category: ["Baseado em fatos reais", "Guerra Mundial"],
	},
	{
		title: "Um Sonho de Liberdade",
		description: "",
		picture: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xSnM4ahmz692msbMTBsfBWHvR3M.jpg",
		genre: ["drama", "crime"],
		category: ["Top 100 IMDB", "Fuga"],
		minAgeToWatch: 12,
	},
]

export const getAllMovies = (): Movie[] => {
	return movies
}

const MAX_SUGGESTIONS_MOVIES = 3

export const getSuggestedMovies = (userInput: MovieUserInput): Movie[] => {
	const { genre, category, minAge } = userInput

	const suggestions = [] as Movie[]

	console.log("genre: ", genre)

	for (const movie of movies) {
		const genreMatch = genre.length === 0 || genre.some((g) => movie.genre.includes(g))

		const categoryMatch = category.length === 0 || category.some((c) => movie.category.includes(c))

		const ageMatch = minAge === undefined || movie.minAgeToWatch >= minAge

		console.log("genre match: ", genreMatch)
		console.log("category match: ", categoryMatch)
		console.log("age match: ", ageMatch)

		if (genreMatch && categoryMatch && ageMatch) {
			suggestions.push(movie)
		}

		if (suggestions.length >= MAX_SUGGESTIONS_MOVIES) {
			break
		}
	}

	return suggestions
}
