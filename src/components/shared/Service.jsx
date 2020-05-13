import React from 'react';
import Button from '@material-ui/core/Button';

const Service = ({ title, text }) => (
	<div className='border-wrapper'>
		<div className={`service-container service-border-wrapper`}>
			<div className='service-title'>{title}</div>
			<div className='service-text'>{text}</div>
			<Button className='book-button' variant='outlined'>Book Online</Button>
		</div>
	</div>
);

export default Service;