var 	a = prompt('Enter a'),
	b = prompt('Enter b'),
	value = (a * a) - (2 * a * b) - (b * b);

console.log('result is ' + value);

if (value < 0) {
	console.log('wynik jest ujemny');
} else if (value > 0) {
	console.log('wynik jest dodatni');
} else {
	console.log('wynik jest zerowy');
}
switch (value) {
	case 0:
	console.log('wynik zerowy');
	break;
	default:
	console.log('wynik jest inny niz 0');
}
