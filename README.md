# js_homework5

## Теоретический вопрос

Опишите своими словами, что такое экранирование, и зачем оно нужно в языках программирования

## Ответ

Экранирование дает возможность понять интерпретатору языка, что следующий сивол или группу символов следует воспринимать номинально, а не как спецсимвол.

### Пример

const str = 'I'm 30 years old' - получим ошибку, так как для JS строка заканчивается на 2-м апострофе.

const str = 'I\\'m 30 years old' - экранируя второй апостроф получим нужную нам строку.
