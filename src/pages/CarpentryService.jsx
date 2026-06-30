import React from 'react';
import ServiceDetailLayout from '../components/ServiceDetailLayout.jsx';
import { getServiceByKey } from '../data/serviceData.js';

const CarpentryService = () => <ServiceDetailLayout service={getServiceByKey('carpentry')} />;

export default CarpentryService;
