import React, { useEffect, useState } from "react";
import "./App.css";
import Main from './components/main/Main'
import Navbar from "./components/header/Navbar";

export default function App() {
	return (
		<React.Fragment>
			<Navbar/>
			<Main />
		</React.Fragment>
	);
}
