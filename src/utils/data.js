export const experiences = [
    {
        period: 'Jan 2023 - Present',
        company: 'She Code Africa',
        role: 'Frontend Technical Lead',
        description: 'Overseeing the activities and initiatives of the frontend community at SCA, I also organize and host monthly webinars designed to support, educate, and inspire community members. Additionally, I provide mentoring and guidance to those new to the frontend field.'
    },
    {
        period: 'Apr 2022 - Present',
        company: 'Building Bloques Creative Studio',
        role: 'Product Manager',
        description: 'Currently leading the team at BBCS where I drive the development of strategies that align user needs with business objectives, cultivating a culture of teamwork and creative problem-solving to enhance product offerings and improve user experience.'
    },
    {
        period: 'Mar 2023 - Jan 2025',
        company: 'Supreme Marketing Limited',
        role: 'Lead Frontend Developer',
        description: 'Led an Agile team of front-end developers in the creation and ongoing maintenance of innovative fintech applications tailored to meet the diverse needs of clients across Europe.'
    },
    {
        period: 'Mar 2022 - Nov 2022',
        company: 'Coloring Cultures',
        role: 'Product Manager',
        description: 'Successfully recruited a team of 6 developers (3 mobile, 2 web, 1 backend), a QA tester, and a UI/UX designer within 2 weeks. Led the development of a mobile and web application, coordinating the process to ensure timely delivery within client specifications and budget. Also contributed to the app’s web dashboard and completed the landing page.'
    },
];

export const projects = [
   
    {
        name: 'UpMonie',
        tags: 'AI-Powered Fintech Startup',
        description: 'UpMonie is a mobile-first platform designed to help users automate savings and investment through AI-powered recommendations. The platform ensures intelligent financial planning, goal-based savings, and diversified investment opportunities tailored to user financial behavior and goals.',
        image: '/image/upmonie.png',
        link: 'https://codedbabe.notion.site/Upmonie-AI-Powered-Fintech-Startup-192f441cd2fd8049b9f8d575efc08cf6?pvs=4'
    },
    {
        name: 'Firmco Admin',
        tags: 'Portfolio Management App',
        description: 'This app manages and supervises all aspects of financial transactions and user management within the Firmco platform.',
        image: '/image/project-screenshot1.png',
        link: 'https://firmco-admin.vercel.app/',
    },
    {
        name: 'Firmco Client',
        tags: 'Portfolio Management App',
        description: 'The Firmco online portfolio management client application is developed using React, Tailwind, and Firebase. This app is managed through the Firmco Admin Platform.',
        image: '/image/project-screenshot1.png',
        link: 'https://firmco-client.vercel.app/'
    },
    {
        name: 'BeBlended',
        tags: 'Web Application',
        description: 'BeBlended is an online platform connecting Black clients with specialized hairstylists. As a developer, my focus was on building key features for a seamless experience for clients, stylists, and administrators.',
        image: '/image/project-screenshot3.png',
        link: 'https://www.beblended.ca/'
    },
];

export const stacks = [
    {
        name: 'Jira',
        tags: 'Project Management',
        image: '/image/jira.png'
    },
    {
        name: 'Figma',
        tags: 'Design',
        image: '/image/figma.png'
    },
    {
        name: 'Notion',
        tags: 'Productivity',
        image: '/image/notion.png'
    },
    {
        name: 'Canva',
        tags: 'Design',
        image: '/image/canva.png'
    },
    {
        name: 'Next Js',
        tags: 'Javascript Framework',
        image: '/image/next.png'
    },
    {
        name: 'Express Js',
        tags: 'Javascript Framework',
        image: '/image/express.png'
    },
    {
        name: 'Node Js',
        tags: 'Javascript Framework',
        image: '/image/node.png'
    },
    {
        name: 'React Js',
        tags: 'Javascript Framework',
        image: '/image/react.png'
    }
];

export const navSections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'stacks', label: 'Stacks' },
    { id: 'now', label: 'Now' },
    { id: 'contact', label: 'Contact' }
];

export const desSections = [
    { id: 'desktop-about', label: 'About' },
    { id: 'desktop-experiences', label: 'Experience' },
    { id: 'desktop-projects', label: 'Projects' },
    { id: 'desktop-stacks', label: 'Stacks' },
    { id: 'desktop-now', label: 'Now' },
    { id: 'desktop-contact', label: 'Contact' }
];

export const themeConfig = {
    default: {
        background: '#242424',
        primaryText: '#FFFFFF',
        secondaryText: 'rgba(209, 209, 214, 1)',
        accent: '#F5BF6A',
        card: '#2E2E2E'
    },
    darkCyan: {
        background: '#051a1c',
        primaryText: '#c3ebf1',
        secondaryText: 'rgba(183, 212, 245, 0.4)',
        accent: '#2998a1',
        card: '#1b4d51'
    },
    oceanDusk: {
        background: '#182938',
        primaryText: '#b7d4f5',
        secondaryText: 'rgba(183, 212, 245, 0.01)',
        accent: '#1872be',
        card: '#2e475d'
    },
    twilightLavender: {
        background: '#2e3248',
        primaryText: '#cfbcec',
        secondaryText: 'rgba(154, 109, 223, 0.5)',
        accent: '#855ccd',
        card: '#3a3f5d'
    },
    pastelRose: {
        background: '#40364f',
        primaryText: '#f8a6d3',
        secondaryText: 'rgba(208, 138, 178, 0.6)',
        accent: '#f66aa8',
        card: '#4e4160'
    },
    strawberryCream: {
        background: '#ffcfe9',
        primaryText: '#40364f',
        secondaryText: 'rgba(255, 207, 233, 0.15)',
        accent: '#ff8fcc',
        card: '#fddfef'
    },
    vintageBeige: {
        background: '#f3e6cf',
        primaryText: '#774e34',
        secondaryText: 'rgba(119, 78, 52, 0.25)',
        accent: '#f9ac5e',
        card: '#F6EDD6'
    },
    iceBlue: {
        background: '#deebee',
        primaryText: '#1e282a',
        secondaryText: 'rgba(46, 62, 64, 0.5)',
        accent: '#28b3cf',
        card: '#e5fbff'
    },
    frostedGlass: {
        background: '#f2fbfd',
        primaryText: '#12191a',
        secondaryText: 'rgba(18, 25, 26, 0.3)',
        accent: '#40c3cb',
        card: '#D5E2E5'
    },
    light: {
        background: '#ffffff',
        primaryText: '#000000',
        secondaryText: 'rgba(82, 82, 91, 0.5)',
        accent: '#D94A1F',
        card: '#F8F8F8'
    },
};