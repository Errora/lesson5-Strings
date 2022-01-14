//toUpperCase, toLowerCase

const animal = 'Lion';
console.log('upper ', animal.toUpperCase());
console.log('lower ', animal.toLowerCase());

// Найти символы - indexOf, includes
const text = 'Мой любимый язык программирования JavaScript';
console.log('indexOf ', text.indexOf('JavaScript')); // 34
console.log('includes ', text.indexOf('JavaScript'));  //true

//Обрезка строки - slice, substring
const progrLan = 'JavaScript';
console.log('slice', progrLan.slice(1, 5));
console.log('substring', progrLan.substring(1, 5));

// Замена символов в строке - replace, replaceAll
const progrLan2 = 'JavaScript';
console.log('replace', progrLan.replace('Script', ''));
console.log('replaceAll', progrLan.replaceAll('a', 'A'));

//Повторение - repeat
const helloText = 'Hello';
console.log(helloText.repeat(10));

//trim
const nameOfUser = prompt('Как вас зовут?');
console.log('nameOfUser', nameOfUser.trim());
