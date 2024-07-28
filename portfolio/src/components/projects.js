import dogear from '../assets/dogear.png'

const projects = [
    { 
        'name': 'Dog Ear Books',
        'image':dogear,
        'description': 'Full-Stack Book E-Commerce Site',
        'full': ' ',
        'tech': ['Django','React','PostgreSQL','Vite','CSS'].join(', '),
        'gitLink':'https://github.com/Nathaniel-T-Rose/Project-Dogear',
        'liveLink':'',
    },
    {
        'name': 'Automated Book Recommendations',
        'image':dogear,
        'description': 'AI Recommendation Script',
        'full': '',
        'tech': ['Python','Google Books API', 'OpenAI'].join(', '),
        'gitLink':'https://github.com/Nathaniel-T-Rose/Book_Recommender',
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
        'gitLink':'https://github.com/Nathaniel-T-Rose/Portfolio_Site',
        'liveLink':'/',
    },
];

export default projects;