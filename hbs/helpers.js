const hbs = require('hbs');

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (text) => {
    let works = text.split(' ');
    works.forEach((work, idx) => {
        works[idx] = work.charAt(0).toUpperCase() + work.slice(1).toLowerCase();
    });
    return works.join(' ');
});