import React from "react";

const Header = () => {
	return (
		<div className="w-full flex justify-between items-center px-6 py-5 text-lg bg-slate-700 text-white">
			<h1>Ekhlakh Ahmad</h1>
			<ul className="flex justify-between items-center">
				<li className="px-2 mx-2 hover:text-black cursor-pointer">Home</li>
				<li className="px-2 mx-2 hover:text-black cursor-pointer">Service</li>
				<li className="px-2 mx-2 hover:text-black cursor-pointer">Contact</li>
				<li className="px-2 mx-2 hover:text-black cursor-pointer">About</li>
			</ul>
		</div>
	);
};

export default Header;
