import React from 'react';
import ServiceDetailLayout from '../components/ServiceDetailLayout.jsx';
import { getServiceByKey } from '../data/serviceData.js';

const PaintingService = () => <ServiceDetailLayout service={getServiceByKey('painting')} />;

export default PaintingService;
