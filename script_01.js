
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung : 
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : Check!
4. Ausgabe in Konsole : Check!
*/

const ERROR_STR_DIV = "Division durch 0 nicht möglich!"
const ERROR_STR_CAL = "ungültige Eingabe!"

// module: calculator | tests:
// agreement : "+","-","*",":","/","!"
output(calculator(3,2,"+"));
output(calculator(3,2,"-"));
output(calculator(3,2,"*"));
output(calculator(3,2,":"));
output(calculator(3,2,"/"));
output(calculator(3,0,"/"));
output(calculator(3,2,"#?!"));

function calculator (a, b, op) {
	switch (op) {
		case "+":
			return addition(a, b);
		case "-":
			return subtraction(a, b);
		case "*":
			return multiplication(a, b);
		case "/":
		case ":":
			return division(a, b);
		default:
			return ERROR_STR_CAL;
	}
}

// module: addition a + b |  test:
// output(addition(a, b));
function addition(a, b) {
	return a + b;
}

// module: subtraction a - b |  test:
// output(subtraction(a, b));
function subtraction(a, b) {
	return a - b;	
}

// module: multiplication a * b |  test:
// output(multiplication(a, b));
function multiplication(a, b) {
	return a * b;
}

// module: division a / b |  test
// output(division(a, b));
function division(a, b) { // Ausnahme + Abbruch                                   
	if (b == 0) {
		return ERROR_STR_DIV;
	}
	return a/b; // Regel
}

// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
