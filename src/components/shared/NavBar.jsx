import React from 'react';

const NavBarLink = ({ text }) => {
	return (
		<div className='navbar-link'>
			{text}
		</div>
	)
};

const NavBar = () => (
	<div className='navbar-container'>
		<NavBarLink text='HOME' />
		<NavBarLink text='PHILOSOPHY' />
		<NavBarLink text='SERVICES' />
		<NavBarLink text='CONTACT' />
		<NavBarLink text='BOOK' />
	</div>
);

export default NavBar;