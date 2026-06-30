import React from 'react';
import ServiceDetailLayout from '../components/ServiceDetailLayout.jsx';
import { getServiceByKey } from '../data/serviceData.js';

const ElectricalService = () => <ServiceDetailLayout service={getServiceByKey('electrical')} />;

export default ElectricalService;
