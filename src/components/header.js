import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="inner-header">
					<nav>
						<NavLink smooth to="#about">
							About
						</NavLink>
						<NavLink smooth to="#tools">
							The Tools
						</NavLink>
						<NavLink smooth to="#process">
							The Process
						</NavLink>
					</nav>
				</div>
			</header>
		);
	}
}

export default Header;
