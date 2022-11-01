//Питання
const question1 = 'Що з цього не є косметичним засобом?';
const question2 = 'Хто з`їв колобка?';
const question3 = 'Якої шахової фігури не існує?';
const question4 = 'Про яку сім`ю йдеться у романі "Жовтий князь"?';
const question5 = 'У склад будьякої оргаічної речовини входить?';
const question6 = 'Як називається зірка, яка вказала волхвам на місце народження Христа?';
const question7 = 'Де любопитній Варварі ніс відірвали?';
const question8 = 'Хто створив Ейфелеву Башту?';
const question9 = 'Який танок виконав Чарлі Чаплин у фільмі «Золота лихоманка»?';
const question10 = 'Які сім’ї на думку Л.М Толстого схожі?';
const question11 = 'Яке астрономічне явище можна спостерігати один раз у 76 років?';
const question12 = 'У яку одежу прийнято плакати, щоб викликати співчування?';
const question13 = 'Що взимку роблять молоді олені?';
const question14 = 'Які з цих прикрас можна зустріти на новорічній ялинці?';
const question15 = 'Який колір виходить при змішуванні синього і червоного?';
const questions = [1,2,3,4];
//Поле для питань
let questionsField = document.querySelector('.questions_field');

//Отриуємо чекбокси
const answers = [
  document.querySelector('#answer1'),
  document.querySelector('#answer2'),
  document.querySelector('#answer3'),
  document.querySelector('#answer4'),
];

//Кнопка
let btn = document.querySelector('.btn');
let btn2 = document.querySelector('.fifty-fifty');
let btn3 = document.querySelector('.call_friend');


//Початок гри.
questionsField.append(question1);


btn.addEventListener('click', (event) => {
  console.log('Log:', event);
  //questionsField.textContent = question10;    console.log( Math.floor(Math.random() * (Math.floor(3) - Math.ceil(0) + 1)) + Math.ceil(0))

  const random = Math.floor(Math.random() * (Math.floor(3) - Math.ceil(0) + 1)) + Math.ceil(0);
  questionsField.textContent = questions[random];
});


btn2.addEventListener('click', (event) => {
  
  });
btn3.addEventListener('click', (event) => {
  const random = Math.floor(Math.random() * (Math.floor(3) - Math.ceil(0) + 1)) + Math.ceil(0);
  questionsField.textContent = questions[random];
});

btn.addEventListener('click', ()=>{ 
  answers.forEach((element)=>{ 
    if (element.checked) { 
      if (element.classlist.contains('someactiveclass')) { 
        console.log('следующий вопрос');
      } else { 
        console.log('вы проиграли ');
      } 
  }  
       
  }) 
})
