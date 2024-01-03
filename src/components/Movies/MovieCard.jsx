import React from "react";

export default function MovieCard(props) {
	const { movieProp } = props;
	// const ratingStyle =
	return (
		<div className="w-48 h-64 sm:w-32 sm:h-40 lg:w-48 lg:h-64 p-2 bg-blue-900 bg-opacity-80 rounded lg:overflow-hidden  transition-all duration-1000 hover:shadow-spread ease-in-out hover:scale-[1.02]">
			<a
				href={`https://www.themoviedb.org/movie/${movieProp.id}`}
				target="_blank"
				className="group w-full h-full relative shadow-md shadow-gray-400">
				<img
					src={`https://image.tmdb.org/t/p/w500${
						movieProp.backdrop_path || movieProp.poster_path
					}`}
					alt=""
					className="w-full h-full object-cover object-center rounded-t group-hover:opacity-20 transition-opacity duration-500 ease-out"
				/>

				<div className="w-full h-full lg:h-max p-1 lg:p-2 text-white flex gap-2 flex-col justify-between items-center rounded-t-[10px] lg:backdrop-blur rounded-b absolute bottom-0 lg:bottom-[-120px] lg:opacity-0 lg:group-hover:bottom-0 group-hover:opacity-100 transition-all group-hover:bg-gray-950  duration-700 ease-in-out">
					<h3 className="text-sm sm:text-[10px] lg:text-xl px-[6px] shadow-[0_0_10px_-5px_#365486]  rounded bg-blue-950 bg-opacity-50">
						{movieProp.title || movieProp.original_title}
					</h3>
					<div className="w-full lg:flex p-[4px] justify-between text-center shadow-[0_0_10px_-5px_#365486] items-center rounded bg-blue-950 bg-opacity-50 sm:hidden">
						<p className=" text-sm ">{movieProp.release_date}</p>
						<p className=" text-sm ">
							{Math.round(movieProp.vote_average)} ⭐
						</p>
					</div>
				</div>
			</a>
		</div>
	);
}
