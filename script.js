var a = +prompt('Введите первое число');
var b = +prompt('Введите второе число');
var c = +prompt('Введите третье число');
if(a > b && a < c || a < b && a > c && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
    alert('Среднее число ' + a)
}
else if(a < b && b < c || a > b && b > c && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
    alert('Среднее число ' + b)
}
else if(c < b && a < c || c > b && a > c && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
    alert('Среднее число ' + c)
}
else {
    alert('ошибка')
}