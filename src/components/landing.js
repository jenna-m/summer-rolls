import React from 'react';

class Landing extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="landing">
					<div className="landing-text">
						<h1>
							I'm{' '}
							<a
								href="https://jennamichaels.dev"
								target="_blank"
								rel="noopener noreferrer"
							>
								Jenna
							</a>
							,
						</h1>
						<h2>
							self-proclaimed <span>summer roll</span> expert
						</h2>
						<h2>
							and <span>mise en place</span> enthusiast
						</h2>
						<h3>(by no means a professional chef)</h3>
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;
