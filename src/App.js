import React from 'react';
import NavBar from './components/NavBar';
import Start from './components/pages/Start';
import Philosophy from './components/pages/Philosophy';
import ParallaxImg from './components/ParallaxImg';
import ContentContainer from './components/ContentContainer';
import Footer from './components/Footer';

const App = () => (
	<div className='app-container'>
		<NavBar />
		<Start />
		<Philosophy />
		<ParallaxImg idx={2} />
		<ContentContainer />
		<ParallaxImg idx={3} />
		<ContentContainer />
		<Footer />
	</div>
);

export default App;
