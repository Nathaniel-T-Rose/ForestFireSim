import dogear from '../assets/dogear.png'

const projects = [
    { 
        'name': 'Dog Ear Books',
        'image':dogear,
        'description': 'Full-Stack Book E-Commerce Site',
        'full': ' ',
        'tech': ['Django','React','Vite','CSS'].join(', '),
        'gitLink':'',
        'liveLink':'',
    },
    {
        'name': 'Automated Book Recommendations',
        'image':dogear,
        'description': 'AI Recommendation Script',
        'full': '',
        'tech': ['Python','Google Books API', 'OpenAI'].join(', '),
        'gitLink':'',
        'liveLink':'',
    },
    {
        'name': 'DNR Snap',
        'image':dogear,
        'description': 'Gamified Wildlife Spotting Application',
        'full': 'In Progress...',
        'tech': [].join(', '),
        'gitLink':'',
        'liveLink':'',
    },
    {
        'name': 'Personal Site',
        'image':dogear,
        'description': 'JRPG-Informed Portfolio Site',
        'full': '',
        'tech': ['React','SCSS'].join(', '),
        'gitLink':'',
        'liveLink':'',
    },
];

export default projects;