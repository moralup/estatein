// const fs = require('fs');

// const createClasses = (nameOfCreatingClasses, values, nameCssRule) => {
//     let classes = '';

//     [...new Set(values)].sort((a, b) => a - b).forEach(value => {
//         classes += `
// .${nameOfCreatingClasses}-${value} {
//     ${nameCssRule}: ${value}px;
// }`;
//     });

//     return classes;
// };

// function fileHandler() {
//     const classes = createClasses(
//         'g',
//         [14, 14, 14, 30, 80, 40, 6, 10, 24, 20],
//         'gap',
//     );

//     fs.appendFile('scripts/test.css', classes, err => {
//         if (err) throw err;
//         console.log('Data has been added!');
//     });
// }

// fileHandler();
