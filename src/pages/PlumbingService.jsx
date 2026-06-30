import React from 'react';
import ServiceDetailLayout from '../components/ServiceDetailLayout.jsx';
import { getServiceByKey } from '../data/serviceData.js';

const PlumbingService = () => <ServiceDetailLayout service={getServiceByKey('plumbing')} />;

export default PlumbingService;
