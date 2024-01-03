import React from "react";

export default function FilterGroup(props) {
	const { minRating, onRatingClick, ratingsList } = props;

	return (
		<ul className="flex-[2] p-1 text-center text-sm w-full flex gap-x-4 justify-evenly items-center rounded-sm capitalize bg-blue-100 bg-opacity-20">
			{ratingsList.map((rating, i) => {
				return (
					<li
						key={i}
						className={`${
							minRating === rating
								? "bg-blue-700 rounded shadow-[0_0_12px_-4px_rgba(100,100,0,01)]"
								: ""
						} py-1 px-1  cursor-pointer transition-colors duration-100 ease-in `}
						onClick={() => {
							onRatingClick(rating);
						}}>
						{rating}+ star
					</li>
				);
			})}
		</ul>
	);
}
