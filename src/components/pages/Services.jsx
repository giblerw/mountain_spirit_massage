import React from 'react';
import ContentContainer from '../shared/ContentContainer';
import Service from '../shared/Service';
import { service_list } from '../../assets/STATIC';

const Services = () => (
	<ContentContainer>
		<div className='services-container'>
			{service_list.map((service, idx) => (
				<Service key={`service_${idx}`} title={service.title} text={service.text} />
			))}
		</div>
	</ContentContainer>
);

export default Services;