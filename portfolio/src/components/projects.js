import dogear from '../assets/dogear.png'

const projects = [
    { 
        'name': 'Dog Ear Books',
        'image':dogear,
        'description': 'Full-Stack Book E-Commerce Site',
        'overview': "Dog Ear Books is a mock of an e-commerce site offering a selection books. It offers a range of titles and access to an AI recommendation system which will provide users a trio of potential titles to investigate based on their favorite books and authors. This project was created to practice skills across the stack using Django, React, and Postgres, as well as integrating with OpenAI's API.",
        'background':["As an avid reader, I've spent hours scrolling sites like Barnes & Noble, Goodreads, and local bookstores on the hunt for new titles to add to my 'To be read next' stack. When the itch struck me to build my next full-stack project, it was natural to use a book shop as my framework.", 
            "Dog Ear leverages a PostgreSQL database created from a dataset from Kaggle, with existing title data being supplemented by querying the Google Books API. Additionally, the site provides a simple interface for using my book recommendation engine." ],
        'tech': ['Django','React','PostgreSQL','Vite','CSS'].join(', '),
        'gitLink':'https://github.com/Nathaniel-T-Rose/Project-Dogear',
        'liveLink':'',
    },
    {
        'name': 'Book Recommendations',
        'image':dogear,
        'description': 'Automated Recommendation Script',
        'overview': "This script operates as a wrapper to OpenAI. Using a set of titles and authors from a user input, as well as additional title data obtained from querying the Google Books API, the engine builds its message and obtains a JSON containing data on related books",
        'background': ["There comes a point when an avid genre-reader exhausts books that fit their favorite conceptual niche, and they have to branch out beyond well-known titles into more fringe picks. At that point, it can be difficult to find books without sifting through review after review, so any additional help is appreciated via favorite author recommendation, book store employees, or friends to give new leads.",
            "Having not worked with GPT extensively, I thought it would be useful to give it a set of a person's favorite books, then fine-tune the output to give back lesser known, if still well reviewed, titles related to them.", "Technically, this offered me exposure to working with GPT via API call rather than the OpenAI website, and offered an interesting minor hurdle in getting back consistent JSON format message data."],
        'tech': ['Python','Google Books API', 'OpenAI'].join(', '),
        'gitLink':'https://github.com/Nathaniel-T-Rose/Book_Recommender',
        'liveLink':'',
    },
    {
        'name': 'DNR Snap',
        'image':dogear,
        'description': 'Gamified Wildlife Field Guide',
        'overview': 'DNR Snap is currently being built. Check out the design docs to see where this app is headed!',
        'background': ['In Progress...'],
        'tech': [].join(', '),
        'gitLink':'',
        'liveLink':'',
    },
    {
        'name': 'Portfolio Site',
        'image':dogear,
        'description': 'JRPG-Informed Portfolio Site',
        'overview': "The site you're currently on! It was built with React, SCSS, and Three.js, and hopes to evoke the nostalgia for earlier role-playing games while still maintaining a simple, easy-to-navigate structure.",
        'background':["Having grown up with the likes of Final Fantasy, World of Warcraft, Fire Emblem, and countless other titles, I enjoy injecting a fragment of my early wonder with video games into the projects I create. The current design takes heavy influence from earlier JRPG games in particular.","Thanks for visiting!"],
        'tech': ['React','Three.js','SCSS'].join(', '),
        'gitLink':'https://github.com/Nathaniel-T-Rose/Portfolio_Site',
        'liveLink':'/',
    },
];

export default projects;