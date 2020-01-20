import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="inner-header">
					<nav>
						<a href="#about">About</a>
						<a href="#tools">The Tools</a>
						<a href="#process">The Process</a>
					</nav>
				</div>
			</header>
		);
	}
}

export default Header;
