let answer = prompt( "Ты хочешь, чтобы в тебя полетела ракета?", ["Введи сюда свой ответ!"]);

if (answer=="Введи сюда свой ответ!" || answer == "") {
	alert("Ты придурок? Ты ничего не написал!");
	alert("Вот попробуй ещё раз.");
	let answer2 = prompt( "Ты хочешь, чтобы в тебя полетела ракета?", ["Введи сюда свой ответ!"]);
	
	if (answer2=="Введи сюда свой ответ!") {
		alert("Ты безнадёжен...");
	}
	else if ( answer2 == null) {
	alert ("Я конечно не эксперт, но ты отменил меня?");
	alert ("Ты будешь страдать!");
}

	else {
		alert(`Ну наконец-то ты хоть что-нибудь написал!!! Так посмотрим... \"${answer2}\"? Ты серьёзно?`);
	}
}

else if ( answer == null) {
	alert ("Я конечно не эксперт, но ты отменил меня?");
	alert ("Ты будешь страдать!");
}

else {
	alert (`Что значит \"${answer}\"? Ты идиот?`);
}