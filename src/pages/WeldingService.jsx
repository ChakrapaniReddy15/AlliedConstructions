import React from 'react';
import ServiceDetailLayout from '../components/ServiceDetailLayout.jsx';
import { getServiceByKey } from '../data/serviceData.js';

const WeldingService = () => <ServiceDetailLayout service={getServiceByKey('welding')} />;

export default WeldingService;
