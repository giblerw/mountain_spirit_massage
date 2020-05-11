import React from 'react';

const ParallaxImg = ({ idx, children }) => (
	<div id={`img-${idx}`} class='parallax'>
		{ children }
	</div>
);

export default ParallaxImg;