import PlumbingHome from '../assets/images/Service Page Images/Plumbing Services/plumbing-home-page-image.jpg';
import PlumbingBanner from '../assets/images/Service Page Images/Plumbing Services/plumbing-banner-image.jpg';
import PlumbingContent from '../assets/images/Service Page Images/Plumbing Services/plumbing-content-main-image.jpg';
import PlumbingMiddle1 from '../assets/images/Service Page Images/Plumbing Services/plumbing-content-middle-image1.jpg';
import PlumbingMiddle2 from '../assets/images/Service Page Images/Plumbing Services/plumbing-content-middle-image2.jpg';
import RoofingHome from '../assets/images/Service Page Images/Roofing Solutions/roofing-home-page-image.jpg';
import RoofingBanner from '../assets/images/Service Page Images/Roofing Solutions/roofing-banner-image.jpg';
import RoofingContent from '../assets/images/Service Page Images/Roofing Solutions/roofing-content-image.jpg';
import RoofingMiddle1 from '../assets/images/Service Page Images/Roofing Solutions/roofing-middle-content-image1.jpg';
import RoofingMiddle2 from '../assets/images/Service Page Images/Roofing Solutions/roofing-middle-content-image2.jpg';
import CarpentryHome from '../assets/images/Service Page Images/Carpenter Services/carpenter-home-page-image.jpg';
import CarpentryBanner from '../assets/images/Service Page Images/Carpenter Services/carpenter-banner-image.jpg';
import CarpentryContent from '../assets/images/Service Page Images/Carpenter Services/carpenter-content-image.jpg';
import CarpentryMiddle1 from '../assets/images/Service Page Images/Carpenter Services/carpenter-middle-content-image1.jpg';
import CarpentryMiddle2 from '../assets/images/Service Page Images/Carpenter Services/carpenter-middle-content-image2.jpg';
import CleaningHome from '../assets/images/Service Page Images/Cleaning Services/cleaning-home-page-image.jpg';
import CleaningBanner from '../assets/images/Service Page Images/Cleaning Services/cleaning-banner-image.jpg';
import CleaningContent from '../assets/images/Service Page Images/Cleaning Services/cleaning-content-image.jpg';
import CleaningMiddle1 from '../assets/images/Service Page Images/Cleaning Services/cleaning-middle-content-image1.jpg';
import CleaningMiddle2 from '../assets/images/Service Page Images/Cleaning Services/cleaning-middle-content-image2.jpg';
import AirHome from '../assets/images/Service Page Images/Air Conditioner Services/air-conditioner-home-image.jpg';
import AirBanner from '../assets/images/Service Page Images/Air Conditioner Services/air-conditioner-banner-image.jpg';
import AirContent from '../assets/images/Service Page Images/Air Conditioner Services/air-conditioner-content-image.jpg';
import AirMiddle1 from '../assets/images/Service Page Images/Air Conditioner Services/air-conditioner-middle-content-image1.jpg';
import AirMiddle2 from '../assets/images/Service Page Images/Air Conditioner Services/air-conditioner-middle-content-image2.jpg';
import PaintingHome from '../assets/images/Service Page Images/Painting Services/painting-home-page-image.jpg';
import PaintingBanner from '../assets/images/Service Page Images/Painting Services/painting-banner-image.jpg';
import PaintingContent from '../assets/images/Service Page Images/Painting Services/painting-content-image.jpg';
import PaintingMiddle1 from '../assets/images/Service Page Images/Painting Services/painting-middle-content-image1.jpg';
import PaintingMiddle2 from '../assets/images/Service Page Images/Painting Services/painting-middle-content-image2.jpg';
import ElectricalHome from '../assets/images/Service Page Images/Electrical Services/electrical_home-page-image.jpg';
import ElectricalBanner from '../assets/images/Service Page Images/Electrical Services/electrical_banner-image.jpg';
import ElectricalContent from '../assets/images/Service Page Images/Electrical Services/electrical_content-image.jpg';
import ElectricalMiddle1 from '../assets/images/Service Page Images/Electrical Services/electrical_middle-content-image1.jpg';
import ElectricalMiddle2 from '../assets/images/Service Page Images/Electrical Services/electrical_middle-content-image2.jpg';
import SolarHome from '../assets/images/Service Page Images/Solar Services/solar-home-page-image.jpg';
import SolarBanner from '../assets/images/Service Page Images/Solar Services/solar-banner-image.jpg';
import SolarContent from '../assets/images/Service Page Images/Solar Services/solar-content-image.jpg';
import SolarMiddle1 from '../assets/images/Service Page Images/Solar Services/solar-middle-content-image1.jpg';
import SolarMiddle2 from '../assets/images/Service Page Images/Solar Services/solar-middle-content-image2.jpg';
import WeldingHome from '../assets/images/Service Page Images/Welding Services/welding-home-page-image.jpg';
import WeldingBanner from '../assets/images/Service Page Images/Welding Services/welding-banner-image.jpg';
import WeldingContent from '../assets/images/Service Page Images/Welding Services/welding-content-image.jpg';
import WeldingMiddle1 from '../assets/images/Service Page Images/Welding Services/welding-middle-content-image1.jpg';
import WeldingMiddle2 from '../assets/images/Service Page Images/Welding Services/welding-middle-content-image2.jpg';
import PlumbingSvg from '../assets/images/svg/plumbing.svg';
import RoofingSvg from '../assets/images/svg/roofing.svg';
import CarpentrySvg from '../assets/images/svg/carpentry.svg';
import CleaningSvg from '../assets/images/svg/cleaning.svg';
import AirConditionSvg from '../assets/images/svg/airCondition.svg';
import PaintingSvg from '../assets/images/svg/painting.svg';
import ElectricalSvg from '../assets/images/svg/electrical.svg';
import SolarSvg from '../assets/images/svg/solar.svg';
import WeldingSvg from '../assets/images/svg/welding.svg';

export const services = [
    {
        key: 'plumbing',
        title: 'Plumbing Solutions',
        pageTitle: 'Plumbing Service',
        route: '/PlumbingService',
        label: 'PLUMBING',
        icon: PlumbingSvg,
        images: { home: PlumbingHome, banner: PlumbingBanner, content: PlumbingContent, middle1: PlumbingMiddle1, middle2: PlumbingMiddle2 },
        summary: 'Reliable water-line, drainage, fixture, and repair support for homes, offices, and project sites.',
        introTitle: 'Reliable plumbing work for long-lasting spaces.',
        intro: 'Allied Constructions handles plumbing for new work, repairs, and upgrades. Our team plans pipe routes, fixture locations, drainage, and water supply so the space works smoothly after completion.',
        details: 'We plan plumbing along with civil, electrical, tiling, and interior work to reduce rework. Every job is checked for safety, water flow, and easy maintenance.',
        secondaryTitle: 'Complete plumbing work from planning to final testing.',
        secondary: 'Whether it is a bathroom renovation, kitchen upgrade, or water-line repair, we focus on strong materials, neat finishing, and dependable daily use.',
        checklist: ['Water supply and drainage planning', 'Bathroom and kitchen fixture installation', 'Leak detection and repair planning', 'Pump, tank, and utility connection support', 'Final testing before completion'],
        closingTitle: 'Built for daily use and easy maintenance.',
        closing: 'Our plumbing work is planned to support clean finishes, dependable performance, and easier service access whenever maintenance is required.'
    },
    {
        key: 'roofing',
        title: 'Roofing Solutions',
        pageTitle: 'Roofing Service',
        route: '/RoofingService',
        label: 'ROOFING',
        icon: RoofingSvg,
        images: { home: RoofingHome, banner: RoofingBanner, content: RoofingContent, middle1: RoofingMiddle1, middle2: RoofingMiddle2 },
        summary: 'Roof installation, repair, waterproofing, and protection work for stronger building performance.',
        introTitle: 'Strong roofing solutions for protection and durability.',
        intro: 'Allied Constructions provides roofing work that protects the building from weather, leakage, and heat. We check the site condition, slope, material choice, and water flow before work starts.',
        details: 'Our roofing work covers repairs, new roofing, waterproofing, and finishing. We focus on strong layers, clean joints, and easy maintenance.',
        secondaryTitle: 'Roof work planned around safety, strength, and finish.',
        secondary: 'From terrace waterproofing to roof restoration, we help reduce leakage risks and improve the life of the building envelope.',
        checklist: ['Roof inspection and repair planning', 'Waterproofing and leakage control', 'Sheet, tile, or slab roof work', 'Drainage slope and outlet checks', 'Protective finishing for long-term use'],
        closingTitle: 'Protection that supports the whole structure.',
        closing: 'A well-executed roof keeps interiors safer, reduces repeated repairs, and supports the long-term value of the property.'
    },
    {
        key: 'carpentry',
        title: 'Carpentry Solutions',
        pageTitle: 'Carpentry Service',
        route: '/CarpentryService',
        label: 'CARPENTRY',
        icon: CarpentrySvg,
        images: { home: CarpentryHome, banner: CarpentryBanner, content: CarpentryContent, middle1: CarpentryMiddle1, middle2: CarpentryMiddle2 },
        summary: 'Custom woodwork, cabinets, repairs, and finishing for useful interior spaces.',
        introTitle: 'Custom carpentry that fits the way your space works.',
        intro: 'Allied Constructions provides carpentry for interiors, renovations, storage, doors, partitions, and finishing details. We align measurements, materials, and site conditions before fabrication and installation.',
        details: 'Our carpentry team works with designers and site supervisors so woodwork fits cleanly with electrical points, wall finishes, flooring, and daily usage needs.',
        secondaryTitle: 'Functional woodwork with careful finishing.',
        secondary: 'From wardrobes and cabinets to doors and trims, we focus on usability, alignment, hardware quality, and a polished final look.',
        checklist: ['Custom cabinets and storage units', 'Door, frame, and partition work', 'Modular and site-built interior woodwork', 'Hardware fitting and alignment checks', 'Repair and finishing support'],
        closingTitle: 'Made to fit the room, not fight it.',
        closing: 'Good carpentry should feel natural in the space, offer useful storage, and hold up through everyday use.'
    },
    {
        key: 'cleaning',
        title: 'Cleaning Solutions',
        pageTitle: 'Cleaning Service',
        route: '/CleaningService',
        label: 'CLEANING',
        icon: CleaningSvg,
        images: { home: CleaningHome, banner: CleaningBanner, content: CleaningContent, middle1: CleaningMiddle1, middle2: CleaningMiddle2 },
        summary: 'Deep cleaning and post-construction cleaning before the space is used.',
        introTitle: 'Cleaning support that prepares spaces for use.',
        intro: 'Allied Constructions offers cleaning for completed construction work, renovations, and used spaces that need a refresh. We remove dust, debris, marks, and site waste so the space is ready to use.',
        details: 'We clean at the right project stage, protect finished areas, and clear dust from floors, fixtures, glass, hardware, and utility areas.',
        secondaryTitle: 'A cleaner space after the hard work is done.',
        secondary: 'Post-construction cleaning helps the final work look clear and makes move-ins or client reviews easier.',
        checklist: ['Post-construction dust and debris removal', 'Floor, glass, and fixture cleaning', 'Kitchen, bathroom, and utility-area cleaning', 'Paint and surface cleanup', 'Final cleaning before use'],
        closingTitle: 'The finishing step that makes quality visible.',
        closing: 'Clean spaces help clients see the workmanship clearly and start using the property with confidence.'
    },
    {
        key: 'air',
        title: 'Air Condition Solutions',
        pageTitle: 'Air Condition Service',
        route: '/AirConditionService',
        label: 'AIR CONDITION',
        icon: AirConditionSvg,
        images: { home: AirHome, banner: AirBanner, content: AirContent, middle1: AirMiddle1, middle2: AirMiddle2 },
        summary: 'AC planning, installation, service, and repair support for comfortable rooms.',
        introTitle: 'Air-conditioning support for comfortable, efficient spaces.',
        intro: 'Allied Constructions handles air-conditioning work for homes, offices, and interiors. We plan unit placement, service access, drainage, electrical support, and installation steps.',
        details: 'The goal is clean installation with better cooling performance, neat routing, and reduced disruption to finished interiors.',
        secondaryTitle: 'Comfort systems planned with the full project in mind.',
        secondary: 'We plan AC work with ceiling, electrical, wall, and furniture layouts so cooling systems fit neatly into the completed space.',
        checklist: ['AC point planning and installation support', 'Indoor and outdoor unit placement', 'Drain and copper-line route checks', 'Service and repair support', 'Final cooling and leakage checks'],
        closingTitle: 'Comfort without messy work.',
        closing: 'Well-planned AC work protects the interior finish while keeping rooms comfortable and easy to maintain.'
    },
    {
        key: 'painting',
        title: 'Painting Solutions',
        pageTitle: 'Painting Service',
        route: '/PaintingService',
        label: 'PAINTING',
        icon: PaintingSvg,
        images: { home: PaintingHome, banner: PaintingBanner, content: PaintingContent, middle1: PaintingMiddle1, middle2: PaintingMiddle2 },
        summary: 'Interior and exterior painting, surface preparation, texture, and finishing work.',
        introTitle: 'Painting finishes that lift the whole space.',
        intro: 'Allied Constructions handles painting for new projects, renovations, and repairs. We prepare surfaces properly, recommend suitable finishes, and execute with attention to coverage, edges, and durability.',
        details: 'Good painting depends on preparation. We address cracks, patches, primer, putty, sanding, and protection before final coats are applied.',
        secondaryTitle: 'From surface preparation to final coat.',
        secondary: 'Our painting work is planned around color selection, usage conditions, lighting, and the durability needed for each area.',
        checklist: ['Interior and exterior painting', 'Wall putty, primer, and surface preparation', 'Texture and feature-wall finishes', 'Waterproof and weather-resistant coating support', 'Touch-up and repainting work'],
        closingTitle: 'Clean color, neat edges, lasting finish.',
        closing: 'A well-painted space should look refined on day one and continue to feel fresh with regular use.'
    },
    {
        key: 'electrical',
        title: 'Electrical Solutions',
        pageTitle: 'Electrical Service',
        route: '/ElectricalService',
        label: 'ELECTRICAL',
        icon: ElectricalSvg,
        images: { home: ElectricalHome, banner: ElectricalBanner, content: ElectricalContent, middle1: ElectricalMiddle1, middle2: ElectricalMiddle2 },
        summary: 'Wiring, lighting, power points, and safety checks for projects.',
        introTitle: 'Electrical work planned for safety and everyday convenience.',
        intro: 'Allied Constructions supports electrical work for construction, renovation, and interior projects. We plan wiring, switch placement, lighting, panels, and appliance points based on how each space will be used.',
        details: 'Our team focuses on safe wiring routes, load planning, clean finishing, and easy maintenance access while working with the civil and interior teams.',
        secondaryTitle: 'Power, lighting, and control points placed with intent.',
        secondary: 'From basic wiring to modern lighting layouts, we help create spaces that are safer, better lit, and easier to operate.',
        checklist: ['Electrical wiring and point planning', 'Lighting layout and fixture installation support', 'Distribution board and safety checks', 'Switch, socket, and appliance point installation', 'Testing and fault repair support'],
        closingTitle: 'Reliable electrical systems behind clean interiors.',
        closing: 'Good electrical work should be safe, useful, and neatly hidden once the project is complete.'
    },
    {
        key: 'solar',
        title: 'Solar Solutions',
        pageTitle: 'Solar Service',
        route: '/SolarService',
        label: 'SOLAR',
        icon: SolarSvg,
        images: { home: SolarHome, banner: SolarBanner, content: SolarContent, middle1: SolarMiddle1, middle2: SolarMiddle2 },
        summary: 'Solar planning and installation support for homes and buildings.',
        introTitle: 'Solar-ready solutions for smarter energy use.',
        intro: 'Allied Constructions helps add solar planning to building and renovation projects. We review roof space, access, electrical points, and installation needs so solar systems can be added cleanly.',
        details: 'Solar work is easier when planned early. We plan mounting, wiring paths, inverter location, and maintenance access with the rest of the project.',
        secondaryTitle: 'Energy planning that fits the building.',
        secondary: 'Our solar support helps property owners prepare for efficient power use without compromising structure, waterproofing, or future maintenance.',
        checklist: ['Solar site check and planning support', 'Roof and mounting planning', 'Inverter and wiring route checks', 'Panel installation support', 'Maintenance access and safety checks'],
        closingTitle: 'Cleaner energy, cleaner work.',
        closing: 'When solar is planned properly, the system works with the building instead of becoming an afterthought.'
    },
    {
        key: 'welding',
        title: 'Welding Solutions',
        pageTitle: 'Welding Service',
        route: '/WeldingService',
        label: 'WELDING',
        icon: WeldingSvg,
        images: { home: WeldingHome, banner: WeldingBanner, content: WeldingContent, middle1: WeldingMiddle1, middle2: WeldingMiddle2 },
        summary: 'Fabrication, gates, grills, frames, railings, repairs, and metalwork for durable project details.',
        introTitle: 'Strong metalwork for construction needs.',
        intro: 'Allied Constructions provides welding and fabrication support for structural details, gates, grills, railings, frames, and repair work. We focus on strength, alignment, and safe finishing.',
        details: 'Our welding work is planned around site measurements and finish needs so metal parts fit properly and work reliably.',
        secondaryTitle: 'Metal fabrication and repair work.',
        secondary: 'From small repairs to custom metal details, we handle measurement, fabrication, installation, grinding, and finishing.',
        checklist: ['Gate, grill, railing, and frame fabrication', 'Metal repair and strengthening support', 'Custom brackets and structural details', 'Site measurement and installation', 'Grinding, finishing, and paint support'],
        closingTitle: 'Metalwork built for strength and fit.',
        closing: 'Good welding should be strong, aligned, and finished cleanly so it supports both safety and appearance.'
    }
];

export const getServiceByKey = (key) => services.find((service) => service.key === key);
