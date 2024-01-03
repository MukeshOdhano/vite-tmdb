import React, { useEffect, useState } from "react";
import lodash from "lodash";

import MovieHeader from "./MovieHeader";
import MovieCard from "./MovieCard";

const API_KEY = "API Key";

export default function MoviesList() {
	const [movies, setMovies] = useState([]);
	const [filterMovies, setFilterMovies] = useState([]);
	const [minRating, setMinRating] = useState(0);
	const [sort, setSort] = useState({
		by: "default",
		order: "asc",
	});

	useEffect(() => {
		fetchMovies();
	}, []);

	useEffect(() => {
		if (sort.by !== "default") {
			const sortedMovies = lodash.orderBy(
				filterMovies,
				[sort.by],
				[sort.order]
			);

			setFilterMovies(sortedMovies);
			// console.log(filterMovies, filterMovies);
		}
	}, [sort]);

	const fetchMovies = async () => {
		const response = await fetch(
			"https://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY
		);
		const data = await response.json();

		setMovies(data.results);
		setFilterMovies(data.results);
	};

	const handleFilter = (rate) => {
		if (rate === minRating) {
			setMinRating(0);
			setFilterMovies(movies);
		} else {
			setMinRating(rate);
			const filterMovies = movies.filter(
				(movie) => movie.vote_average >= rate
			);
			setFilterMovies(filterMovies);
		}
	};

	return (
		<React.Fragment>
			<MovieHeader
				ratFilter={handleFilter}
				min_Rating={minRating}
				sort={sort}
				setSort={setSort}
			/>

			<div className="w-full h-full mt-5 p-2 flex flex-wrap gap-10 justify-evenly items-center">
				{filterMovies.map((movie, index) => {
					return <MovieCard key={index} movieProp={movie} />;
				})}
			</div>
		</React.Fragment>
	);
}
