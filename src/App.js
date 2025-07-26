import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import { ThemeProvider } from "./contexts/ThemeContext";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<ThemeProvider>
			<div className="App">
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/education" element={<Articles />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/resume" element={<Resume />} />
					<Route path="/article/:slug" element={<ReadArticle />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</div>
		</ThemeProvider>
	);
}

export default App;
