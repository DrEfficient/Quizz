var questions = ["Vad heter huvudstaden i Österrike?", "Vad heter huvudstaden i Irland?", "Vad heter huvudstaden i Norge?", "Vilket land använder valutan 'SEK'?", "I vilken världsdel ligger Argentina?", "Vad är förkortningen för JavaScript?" ];
var answers = ["Wien", "Dublin", "Oslo", "Sverige", "Sydamerika", "JS"];
var correct = 0;
var question = 0;
var procentcorrect = 0;

var rand = Math.floor(Math.random() * questions.length);


function setQuestion(rand) {
	document.getElementById("question").innerHTML = questions[rand];
}

function nextQuestion() {
	rand = Math.floor(Math.random() * questions.length);
	document.getElementById("question").innerHTML = questions[rand];
	question = question + 1;
	document.getElementById("questionSum").innerHTML = question;
	document.getElementById("answer").value = "";
}

function checkAnswer() {
	if (document.getElementById("answer").value != "") {
		var altAnswer = document.getElementById("answer").value;
		if (altAnswer == answers[rand]) {
			document.getElementById("correct").innerHTML = "Svaret är korrekt!";
			correct = correct + 1;
			document.getElementById("correctSum").innerHTML = correct;
		} else {
		document.getElementById("correct").innerHTML = "Svaret är felaktigt!";
		}
	}
}
function quitquiz() {
	procentcorrect = ((correct/question) * 100).toFixed(3);
	document.getElementById("procentcorrect").innerHTML = procentcorrect + "%";
	if (procentcorrect < 60) {
		document.getElementById("provet").innerHTML = "Du har misslyckats med provet";
	} else {
		document.getElementById("provet").innerHTML = "Du har klarat provet!"
	}
}
