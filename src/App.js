import React from 'react';
import NavBar from './components/shared/NavBar';
import Start from './components/pages/Start';
import Philosophy from './components/pages/Philosophy';
import ParallaxImg from './components/shared/ParallaxImg';
import ContentContainer from './components/shared/ContentContainer';
import Footer from './components/shared/Footer';
import Services from './components/pages/Services';

const App = () => (
	<div className='app-container'>
		<NavBar />
		<Start />
		<Philosophy />
		<ParallaxImg idx={2} />
		<Services />
		<ParallaxImg idx={3} />
		<ContentContainer />
		<Footer />
	</div>
);

export default App;
