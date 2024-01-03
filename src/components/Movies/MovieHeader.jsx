import React, { useState, useEffect } from "react";
import lodash from "lodash";

import FilterGroup from "./FilterGroup";

export default function MovieHeader(props) {
	const { ratFilter, min_Rating } = props;
	const { sort, setSort } = props;



	const handleSort = (e) => {
		const { name, value } = e.target;

		setSort((prev) => ({ ...prev, [name]: value }));
	};

	// console.log(sort);


	return (
		<header className="w-ful mt-4 p-2 text-white flex justify-between items-center">
			<h2 className="flex-1">Popular</h2>
			<div className="flex-[1] w-full flex gap-4 justify-between items-center">
				<FilterGroup
					minRating={min_Rating}
					onRatingClick={ratFilter}
					ratingsList={[8, 7, 6, 5]}
				/>
				<select
					name="by"
					value={sort.by}
					onChange={handleSort}
					className="text-black py-1  bg-blue-100 bg-opacity-60 tracking-wider outline-none uppercase text-reg rounded-sm">
					<option value="" className="text-gray-400">
						Sort By
					</option>
					<option value="title">Title</option>
					<option value="vote_average">Rating</option>
					<option value="release_date">Date</option>
					<option value="id">Id</option>
				</select>
				<select
					name="order"
					value={sort.order}
					onChange={handleSort}
					className="text-black py-1  bg-blue-100 bg-opacity-60 tracking-wider outline-none uppercase text-reg rounded-sm">
					<option value="asc">Ascending</option>
					<option value="desc">Descending</option>
				</select>
			</div>
		</header>
	);
}
