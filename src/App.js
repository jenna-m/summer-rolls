import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/App.scss';
import Header from './components/header';
import Landing from './components/landing';
import About from './components/about';
import Tools from './components/tools';
import Process from './components/process';

const App = () => (
	<Router>
		<div>
			<Header />
			<Landing />
			<section id="about">
				<About />
			</section>
			<section id="tools">
				<Tools />
			</section>
			<section id="process">
				<Process />
			</section>
			<div className="footer">© Jenna Michaels 2020</div>
		</div>
	</Router>
);
export default App;
