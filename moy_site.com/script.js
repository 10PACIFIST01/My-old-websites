function answer() {
	let abme = prompt('Что требуется узнать? \n\n\n Имя, Возраст, Профессия');	

	switch (abme) {
		case 'имя':
		case 'Имя':
		case 'Bvz':
		case 'bvz':
			let guest = confirm ('Если ты нам моем сайте, то ты итак знаешь моё имя "гений".');
			if (guest == false) {
				alert ('Ладно я Данил, доволен?');
			}
			break;
		case 'Возраст':
		case 'возраст':
		case 'djphfcn':
		case 'Djphfcn':
			alert ('Больше чем у тебя!!!');
			break;
		case 'Профессия':
		case 'профессия':
		case 'Ghjatccbz':
		case 'ghjatccbz':
			alert ('Какая профессия, ты мой возраст видел?');
			break;
		default:
			alert ('Попробуйте ещё раз.');
			break;
	}
}
/*if (abme === 'Имя' || 'имя' || 'bvz' || 'Bvz') {
		let guest = confirm ('jjjj');
		if (guest == false) {
			alert ('Ладно, я Данил. Доволен?');
		}
	} else if (abme === 'Возраст' || 'возраст' || 'djphfcn' || 'Djphfcn') {
		alert ('Больше чем у тебя!!!');
	} else if (abme === 'Профессия' || 'профессия' || 'Ghjatccbz' || 'ghjatccbz') {
		alert ('Какая профессия? Ты мой возраст видел?');
	} else {
		alert ('неправильно!');
	}*/