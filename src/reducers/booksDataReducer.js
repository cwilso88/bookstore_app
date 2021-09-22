const booksDataReducer = () => {
    return [
        {
            id: 1,
            title: 'Clean Code', 
            author: 'Robert C. Martin',
            category: 'Information Technology',
            published: '2008',
            description: `Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. ...`,
            coverURL: 'https://images-na.ssl-images-amazon.com/images/I/41yafGMO+rL._SX376_BO1,204,203,200_.jpg'
        },
        {
            id: 2,
            title: 'High Performance Web Sites', 
            author: 'Steve Souders',
            category: 'Computers & Technology',
            published: '2007',
            description: `The rules in High Performance Web Sites explain how you can optimize the performance of the Ajax, CSS, JavaScript, Flash, and images that you've already built into your site -- adjustments that are critical for any rich web application. ... High Performance Web Sites covers every aspect of that process.`,
            coverURL: 'https://images-na.ssl-images-amazon.com/images/I/51V30oEPSDL._SX379_BO1,204,203,200_.jpg'
        },
        {
            id: 3,
            title: `JavaScript: The Good Parts`, 
            author: 'Douglas Crockford',
            category: 'Programming',
            published: '2007',
            description: `In JavaScript: The Good Parts, Crockford finally digs through the steaming pile of good intentions and blunders to give you a detailed look at all the genuinely elegant parts of JavaScript.`,
            coverURL: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg'
        },
        {
            id: 4,
            title: 'Eloquent JavaScript', 
            author: 'Marijn Haverbeke',
            category: 'Web Development & Design',
            published: '2018',
            description: `Eloquent JavaScript is unlike so many of the educational materials out there. It is complete and thorough in a sense that few books or websites are. For being a single book that doesn't read like a dense textbook, it spans a surprising amount of material, including asynchronous programming, node, and data immutability.`,
            coverURL: 'https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg'
        },
    ]
}