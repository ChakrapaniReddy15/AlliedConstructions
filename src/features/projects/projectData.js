const sortProjectImages = (images) =>
    Object.entries(images)
        .sort(([pathA], [pathB]) => {
            const numberA = Number(pathA.match(/\/(\d+)\.jpg$/)?.[1] ?? 0);
            const numberB = Number(pathB.match(/\/(\d+)\.jpg$/)?.[1] ?? 0);

            return numberA - numberB;
        })
        .map(([, image]) => image);

const moveImageToFront = (images, selectedImage) => [
    selectedImage,
    ...images.filter((image) => image !== selectedImage),
];

const hsvWonderWorldResortImages = sortProjectImages(
    import.meta.glob('../../assets/images/Projects/HSV Wonder World Resort/*.jpg', {
        eager: true,
        import: 'default',
    })
);

const giaFarmHouseImages = sortProjectImages(
    import.meta.glob('../../assets/images/Projects/GIA Farm House/*.jpg', {
        eager: true,
        import: 'default',
    })
);

const giaFarmHouseFeaturedImage = new URL(
    '../../assets/images/Projects/GIA Farm House/7.jpg',
    import.meta.url
).href;

const giaFarmHouseGallery = moveImageToFront(giaFarmHouseImages, giaFarmHouseFeaturedImage);

export const projects = [
    {
        slug: 'hsv-wonder-world-resort',
        title: 'HSV Wonder World Resort',
        category: 'Resort Construction',
        location: 'Hyderabad, Telangana',
        status: 'Completed',
        duration: 'Complete project',
        image: hsvWonderWorldResortImages[0],
        banner: hsvWonderWorldResortImages[0],
        gallery: hsvWonderWorldResortImages,
        summary: 'A resort construction project completed with strong planning, site coordination, and detailed finishing.',
        overview: 'HSV Wonder World Resort showcases Allied Constructions project execution across structural work, open-space planning, finishing, and site-ready detailing. The project gallery highlights progress and completed areas from the actual site.',
        scope: ['Site planning and execution coordination', 'Civil construction work', 'Structural and finishing support', 'Utility and service coordination', 'Final quality checks'],
        highlights: [
            'Resort-focused spaces planned for guest movement, utility access, and long-term use.',
            'Site work coordinated across structure, exterior finishing, service areas, and landscape-facing zones.',
            'Construction details reviewed through each stage to maintain finish quality and practical operation.',
        ],
        approach: 'The work was handled with a staged project flow: first checking site requirements, then coordinating civil execution, utility paths, finishing items, and final inspection. This helped keep the resort areas organized and ready for daily use after completion.',
        outcome: 'The resort project was delivered with a clean construction finish, usable site areas, and coordinated project detailing.',
    },
    {
        slug: 'gia-farm-house',
        title: 'GIA Farm House',
        category: 'Farm House Construction',
        location: 'Hyderabad, Telangana',
        status: 'Completed',
        duration: 'Complete project',
        image: giaFarmHouseFeaturedImage,
        banner: giaFarmHouseFeaturedImage,
        gallery: giaFarmHouseGallery,
        summary: 'A farm house project planned for practical use, durable construction, and a neat finished appearance.',
        overview: 'GIA Farm House reflects Allied Constructions work on residential-style construction with open surroundings, practical planning, civil execution, and finishing details. The gallery uses the actual project images now available in the project asset folder.',
        scope: ['Farm house layout planning', 'Civil construction work', 'Exterior and interior finishing', 'Site utility coordination', 'Completion review'],
        highlights: [
            'Farm house spaces planned around comfort, outdoor use, and easy guest movement.',
            'Exterior areas, recreation zones, rooms, and service spaces finished with a clear visual identity.',
            'Final execution balanced practical construction needs with a welcoming leisure-property feel.',
        ],
        approach: 'The project was developed around usable indoor and outdoor zones, with attention to entry experience, recreation areas, rooms, dining support, and site finishing. Each area was completed to support both family use and guest-friendly gatherings.',
        outcome: 'The farm house was completed as a functional, well-finished property with clear site execution and project-ready detailing.',
    },
];

export const featuredProjects = projects;

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);
