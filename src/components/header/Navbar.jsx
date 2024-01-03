import React from "react";

export default function Navbar() {
	return (
		<nav className=" w-full bg-violet-950 text-white pb-5 p-3 uppercase flex justify-between items-center ">
			<a
				href="/"
				className="text-2xl font-bold bg-violet-500 p-2 rounded bg-opacity-50 shadow-md shadow-[#3e4a83b2]">
				Movies-D
			</a>

			<div className="flex gap-x-4 tracking-wider p-2  rounded-sm bg-opacity-20 bg-violet-400  justify-between items-center">
				<a
					href=""
					className="p-1 px-2 rounded transition-all duration-200 ease-in hover:shadow-md hover:shadow-[#ede9fe33] hover:bg-violet-200 hover:bg-opacity-20">
					Home
				</a>
				<a
					href=""
					className="p-1 px-2 rounded transition-all duration-200 ease-in hover:shadow-md hover:shadow-[#ede9fe33] hover:bg-violet-200 hover:bg-opacity-20">
					About
				</a>
				<a
					href=""
					className="p-1 px-2 rounded transition-all duration-200 ease-in hover:shadow-md hover:shadow-[#ede9fe33] hover:bg-violet-200 hover:bg-opacity-20">
					Service
				</a>
			</div>
		</nav>
	);
}
