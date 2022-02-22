document.addEventListener('DOMContentLoaded', function () {
	// конечная дата
	const deadline = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay() + 7);
	// id таймера
	let timerId = null;

	// склонение числительных
	function declensionNum(num, words) {
		return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
	}

	// вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
	function countdownTimer() {
		const diff = deadline - new Date();
		if (diff <= 0) {
			clearInterval(timerId);
		}
		// получаем элементы, содержащие компоненты даты
		const $days = document.querySelectorAll('.timer__days');
		const $hours = document.querySelectorAll('.timer__hours');
		const $minutes = document.querySelectorAll('.timer__minutes');
		const $seconds = document.querySelectorAll('.timer__seconds');
		const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
		const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
		const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
		const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

		for (let index = 0; index < $days.length; index++) {
			$days[index] = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
			$days[index].textContent = days < 10 ? '0' + days : days;
		}
		for (let index = 0; index < $hours.length; index++) {
			$hours[index] = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
			$hours[index].textContent = hours < 10 ? '0' + hours : hours;
		}
		for (let index = 0; index < $minutes.length; index++) {
			$minutes[index] = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
			$minutes[index].textContent = minutes < 10 ? '0' + minutes : minutes;
		}
		for (let index = 0; index < $seconds.length; index++) {
			$seconds[index] = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
			$seconds[index].textContent = seconds < 10 ? '0' + seconds : seconds;
		}
	}
	// const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
	// const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
	// const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
	// const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
	// $days.textContent = days < 10 ? '0' + days : days;
	// $hours.textContent = hours < 10 ? '0' + hours : hours;
	// $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
	// $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
	// $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
	// $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
	// $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
	// $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
	// // получаем элементы, содержащие компоненты даты
	// const $days = document.querySelectorAll('.timer__days');
	// const $hours = document.querySelectorAll('.timer__hours');
	// const $minutes = document.querySelectorAll('.timer__minutes');
	// const $seconds = document.querySelectorAll('.timer__seconds');
	
	// вызываем функцию countdownTimer
	countdownTimer();
	// вызываем функцию countdownTimer каждую секунду
	timerId = setInterval(countdownTimer, 1000);


	//////////////
});