import React from 'react';
import ServiceDetailLayout from '../components/ServiceDetailLayout.jsx';
import { getServiceByKey } from '../data/serviceData.js';

const AirConditionService = () => <ServiceDetailLayout service={getServiceByKey('air')} />;

export default AirConditionService;
