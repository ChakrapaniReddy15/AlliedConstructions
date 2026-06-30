import React from 'react';
import ServiceDetailLayout from '../components/ServiceDetailLayout.jsx';
import { getServiceByKey } from '../data/serviceData.js';

const CleaningService = () => <ServiceDetailLayout service={getServiceByKey('cleaning')} />;

export default CleaningService;
