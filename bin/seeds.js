const mongoose = require('mongoose');
const Sam = require('../models/Sam');
const dbName = 'myApi';
mongoose.connect('mongodb+srv://lariicsa:123@cluster0-sagk5.mongodb.net/test?retryWrites=true&w=majority');


const data = [
    {
        name: 'Larissa',
        lastname: 'Avila Ramírez',
        skills: ['HTML', 'SCSS', 'CSS', 'VueJs', 'Jekyllrb', 'Bootstrap', 'Javascript', 'Advance Git', 'Sketch', 'AdobeXD', 'React', 'Bulma', 'Node', 'Express', 'MongoDB', 'HBS'],
        image: 'https://avatars1.githubusercontent.com/u/2333713?s=460&v=4',
        extract: `Frontend developer & I’m UI Designer. Master in HTML/CSS layingout.
        I enjoy designing and coding user interfaces.`,
        social: [
            {
                name: 'twitter',
                url: 'https://twitter.com/lariicsa'
            },
            {
                name: 'linkedin',
                url: 'https://www.linkedin.com/in/lariicsa'
            },
            {
                name: 'github',
                url: 'https://github.com/Lariicsa'
            }
        ],
        jobs: [
            {
                title: 'Clicker360',
                position: 'Web Designer',
                jobUrl: 'https://clicker360.com',
                jobExtract: 'Design and perform emailing campaigns.',
                skils: ['HTML', 'CSS', 'jQuery', 'wordpress', 'doppler', 'mailchimp', 'fireworks']
            },
            {
                title: 'Holding Leos',
                position: 'UI Designer',
                jobUrl: 'https://www.linkedin.com/company/holding-leos/about',
                jobExtract: `I created components in company platform for operation area, 
                creating a new process to deliver and update content.`,
                skils: ['HTML', 'CSS', 'jQuery', 'wordpress', 'doppler', 'mailchimp', 'fireworks', 'svn', 'bootstrap']
            },
            {
                title: 'Segundamano',
                position: 'Jr. Frontend developer',
                jobUrl: 'https://www.segundamano.mx',
                jobExtract: `Create and develop rules and layout structure for CSS stack, implement html layout in whole site, develop components to migrate to new platform.`,
                skils: ['HTML', 'CSS', 'shoestring Js', 'Javascript', 'Vuejs 1x', 'Basic Git', 'Vim', 'tMux', 'Scrum', 'Jira', 'Confluence']
            },
            {
                title: 'Globant',
                position: 'Jr. Adv. UI Developer',
                jobUrl: 'https://www.globant.com',
                jobExtract: `Create and develop rules and layout structure for CSS stack, implement, html layout, develop components for Citi Banamex Marketplace.`,
                skils: ['HTML', 'SCSS', 'React', 'Git', 'Avoka', 'jQuery', 'Scrum', 'Jira']
            },
            {
                title: 'ASC Education',
                position: 'Lead UI Designer',
                jobUrl: 'https://asc.education/',
                jobExtract: `Design and develop layout components for each company system.`,
                skils: ['VueJs', 'Jekyllrb', 'SCSS', 'CSS', 'Bootstrap', 'HTML', 'Javascript', 'Advance Git', 'Sketch', 'AdobeXD']
            },
            {
                title: 'Wavecation',
                position: 'Jr. Frontend',
                jobUrl: 'https://host.wavecation.com',
                jobExtract: `Customize and fix components and some layouts for webapp company`,
                skils: ['HTML', 'CSS', 'Advanced SCSS', 'Bulma', 'Figma', 'Git', 'Gitflow', 'Trello']
            }
        ]
    }
]

Sam.create(data, err => {
    if (err) { throw (err) };
    console.log(`Created Sam info`);
    mongoose.connection.close();
});