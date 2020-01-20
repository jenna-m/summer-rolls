import React from 'react';
import './styles/App.scss';
import Header from './components/header';
import Landing from './components/landing';
import About from './components/about';
import Tools from './components/tools';
import Process from './components/process';

const App = () => (
	<div>
		<Header />
		<Landing />
		<About />
		<Tools />
		<Process />
		<div className="footer">© Jenna Michaels 2020</div>
	</div>
);
export default App;
