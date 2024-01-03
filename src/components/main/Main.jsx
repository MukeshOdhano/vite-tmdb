import React from "react";
import MoviesBody from "../Movies/MoviesList";

export default function Main() {
	return (
		<main className="w-full p-1 min-h-screen bg-gradient-to-b from-violet-950 to-gray-700">
			<MoviesBody />
		</main>
	);
}
