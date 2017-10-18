var answer_2=['тролейбус'];
var answer_1=["ель","ёлка"];

var x = document.getElementById('q_1');
console.log (x)

function controll () {
	if (document.getElementById('q_1').value != '') {
		if (document.getElementById('q_1').value == 'raz'){
			document.getElementById('ans_1').innerHTML=('pavilno')
		}else (document.getElementById('ans_1').innerHTML=('ne pravilno'))
	}else (window.alert('pusto'))
};
