function truncate(str, maxlength) {
	if (str.length > Number(maxlength)) {
		return str.slice(0, Number(maxlength) + 1) + "..."
	} else {
		return str
	}
}

let str = prompt("Введите строку для исправления:");
let maxlength = +prompt("Введите максимальное количество символов:");

alert(truncate(str, maxlength));
