import React from 'react';
import ServiceDetailLayout from '../components/ServiceDetailLayout.jsx';
import { getServiceByKey } from '../data/serviceData.js';

const SolarService = () => <ServiceDetailLayout service={getServiceByKey('solar')} />;

export default SolarService;
