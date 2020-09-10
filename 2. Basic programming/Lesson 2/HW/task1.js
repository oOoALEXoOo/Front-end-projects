let points = 0;
document.write('<h2 style="text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;">Тест HTML/CSS</h2>');

let question_1 = prompt('Скільки є рівнів заголовків?');
question_1 == '6' || question_1 == 'шість' || question_1 == 'Шість' ? (points++, document.write('<p>1. <i class="fas fa-check"></i></p>')) : document.write('<p>1. <i class="fas fa-times"></i></p>');

let question_2 = prompt('Якщо веб-сторінка має декілька фонових зображень, який background буде на передньому плані?');
question_2 == '1' || question_2 == 'перший' || question_2 == 'Перший' ? (points++, document.write('<p>2. <i class="fas fa-check"></i></p>')) : document.write('<p>2. <i class="fas fa-times"></i></p>');

let question_3 = prompt('Скільки є способів для задання кольору?');
question_3 == '3' || question_3 == 'три' || question_3 == 'Три' ? (points++, document.write('<p>3. <i class="fas fa-check"></i></p>')) : document.write('<p>3. <i class="fas fa-times"></i></p>');

let question_4 = prompt('Яка властивість розміру шрифта?');
question_4 == 'font-size' ? (points++, document.write('<p>4. <i class="fas fa-check"></i></p>')) : document.write('<p>4. <i class="fas fa-times"></i></p>');

let question_5 = prompt('Яка вага даного селектору - div.class input[type="text"] span');
question_5 == '23' ? (points++, document.write('<p>5. <i class="fas fa-check"></i></p>')) : document.write('<p>5. <i class="fas fa-times"></i></p>');

let question_6 = prompt('Яка властивість використовується для внутрішнього відступу контенту від зовнішніх країв елементу?');
question_6 == 'padding' ? (points++, document.write('<p>6. <i class="fas fa-check"></i></p>')) : document.write('<p>6. <i class="fas fa-times"></i></p>');

let question_7 = prompt('Яка назва властивості тіні для текстового елементу?');
question_7 == 'text-shadow' ? (points++, document.write('<p>7. <i class="fas fa-check"></i></p>')) : document.write('<p>7. <i class="fas fa-times"></i></p>');

let question_8 = prompt('2em = ?px');
question_8 == '32' ? (points++, document.write('<p>8. <i class="fas fa-check"></i></p>')) : document.write('<p>8. <i class="fas fa-times"></i></p>');

let question_9 = prompt('Яке ключове слово для відображення тіні всередині елементу?');
question_9 == 'inset' ? (points++, document.write('<p>9. <i class="fas fa-check"></i></p>')) : document.write('<p>9. <i class="fas fa-times"></i></p>');

let question_10 = prompt('Яка назва технології, яка оптимізує сайт в першу чергу для мобільних пристроїв?');
question_10 == 'Mobile First' || question_10 == 'mobile first' || question_10 == 'mobile-first' ? (points++, document.write('<p>10. <i class="fas fa-check"></i></p>')) : document.write('<p>10. <i class="fas fa-times"></i></p>');

document.write(`<h2 style="text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;">Результат: ${points} із 10</h2>`);

points >=0 && points <= 3 ? document.write('<h2 style="color: red">Погано</h2>') : 
points > 3 && points <= 7 ? document.write('<h2 style="color: blue">Задовільно</h2>') :
points > 7 ? document.write('<h2 style="color: green">Добре</h2>') : null;