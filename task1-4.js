const myName = 'Alla';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Vladilen Minin';
const reasonText = 'новые навыки помогут мне быстрее справляться с задачами';
const numberOfMonth = 6;

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. Я уверена, что пройду данный курс до конца!`;
console.log (myInfoText);

myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase());
console.log (myInfoText);
console.log (myInfoText.length);
console.log (myInfoText.slice(0, 1));
console.log (myInfoText.slice(myInfoText.length-1, myInfoText.length));

const userName = prompt('Как вас зовут?');
alert(`Вас зовут ${userName.trim().toUpperCase()}` );

const userAge = Number(prompt('Сколько вам лет?').trim());
alert(`Вас зовут ${userName.trim().toUpperCase()} и вам ${userAge} лет` );
