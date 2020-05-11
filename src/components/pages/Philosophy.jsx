import React from 'react';
import ContentContainer from '../ContentContainer';

const Philosophy = () => (
	<ContentContainer>
		<div className='philosophy-container'>
			<div className='philosophy-left'>
				<div className='left-text-top'>Annie Levy, LMT</div>
				<div className='left-text-title'>Holistic Practice Philosophy</div>
				<div className='left-avatar-container'>
					<div className='left-avatar' />
				</div>
			</div>
			<div className='philosophy-right'>
				I graduated with an AOS Degree in Massage Therapy from the Colorado School of Healing Arts in Lakewood, Colorado in 2015.  My advanced certificates are in the areas of Advanced Neuromuscular Massage, Sports Massage, Craniosacral Therapy, and Lymphatic Drainage Massage.   In 2016, I earned my Reiki Master title through Patti Templin in Denver, CO.  Any of these modalities can be integrated into a session tailored to your specific needs or experienced individually. 
			
				My mission statement is to help others heal, transform, and evolve by listening deeply and generously to their bodies and spirits, and working with those beings to create changes for their highest good. The values I strive to embody in my practice are COMPASSION, LISTENING, INTEGRITY, CONNECTION, WHOLENESS, EVOLUTION, and INTENTION.
			</div>
		</div>
		<div className='philosophy-container-footer'>
			<div className='philosophy-container-footer-text'>"When you touch one thing with deep awareness,<br />you touch everything."</div>
			<div className='philosophy-container-footer-sign'>- Lao Tzu</div>
		</div>
	</ContentContainer>
);

export default Philosophy;