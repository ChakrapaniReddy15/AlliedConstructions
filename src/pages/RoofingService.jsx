import React from 'react';
import ServiceDetailLayout from '../components/ServiceDetailLayout.jsx';
import { getServiceByKey } from '../data/serviceData.js';

const RoofingService = () => <ServiceDetailLayout service={getServiceByKey('roofing')} />;

export default RoofingService;
