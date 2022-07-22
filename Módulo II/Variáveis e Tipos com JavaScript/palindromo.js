// solução 1
function verificaPalindromo(string) {
	if (!string) return;
	console.log(string === string.split('').reverse().join(''));
}
verificaPalindromo('romametemamor');

// solução 2

function varificaPalindromo2(string) {
	if (!string) return;
	if (!string.length) return;

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2('romametemamor');

// solução 3
function verificaPalindromo3(string) {
	if (!string) return;
    string = string.replace(/\s/g, '');
    console.log( string === string.split('').reverse().join(''));
}
verificaPalindromo3('roma me tem amor');