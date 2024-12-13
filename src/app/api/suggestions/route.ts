/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSuggestedMovies } from "@/app/service/movie"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
	const url = new URL(req.url)
	const searchParams = url.searchParams

	const genre = searchParams.get("genre")?.split(",") || []
	const category = searchParams.get("category")?.split(",") || []
	const minAge = searchParams.get("minAge")
	// const platforms = searchParams.getAll("platforms") // Handles multiple platforms

	try {
		const suggestions = getSuggestedMovies({ genre, category, minAge: Number(minAge) })
		return NextResponse.json(suggestions)
	} catch (error: any) {
		return NextResponse.json(
			{ error: "Failed to process request", details: error.message },
			{ status: 400 }
		)
	}
}
