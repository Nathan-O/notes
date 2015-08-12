
/*
function greetEveryone(name) {
	console.log("Hello, " + name);

}

greetEveryone('Pam');

function add(a, b) {
	console.log(a + b);
}

add(3, 99);

add(44);

*/




function convertTempF(temp) {
	temp = (temp * 9/5) + 32;
	console.log(temp + " F");
	return temp;
}

function convertTempC(temp) {
	temp = (temp - 32) * 5/9;
	console.log(temp + " C");
	return temp; 
}

function convertKelvin(scale, temp) {

	if (scale === 'F') {
		//temp = 'F';
		temp = (temp + 459.67) * 5/9;
		console.log("temp", temp);
		//console.log(scale);
		//return temp;
	} else if (scale === 'C') {
		//temp = 'C';
		temp = temp + 273.15;
		console.log("CtoK: ",temp);
		return temp;
	}

}

var F; // = 100;
var C; // = 200;

//convertTempF(C);

//convertTempC(F);

convertKelvin('F', 100);

convertKelvin('C', 200);







/* A way to test whether or not functions work, is to console log a boolean

i.e. 

function thisOne() {
	return "Hi";
}

var bye = thisOne();

console.log(bye === "Hi");

(If bye equals "hi" the console.log will say True)

*/