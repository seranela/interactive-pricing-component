const pageviewsRange = document.getElementById('pageviews');
const pageviewsCount = document.getElementById('pageviews-count');
const pageviewsCost = document.getElementById('cost-amount');
const toggleSwitchButton = document.getElementById('billing-toggle');
const billingCheckbox = document.getElementById('billing-checkbox');

function discountedAmount(amount) {
	return amount - amount * 0.25;
}

function getDollars(amount) {
	return '$' + parseFloat(amount).toFixed(2);
}

function updatePageviews() {
	let val = pageviewsRange.value;
	let min = pageviewsRange.min;
	let max = pageviewsRange.max;
	pageviewsRange.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';

	let choice = pageviewsRange.value;
	let cost = 0;
	let isDiscounted = billingCheckbox.checked;

	switch (choice) {
		case '1':
			pageviewsCount.innerHTML = '10K';
			cost = 8;
			cost = (isDiscounted ? discountedAmount(cost) : cost);
			pageviewsCost.innerHTML = getDollars(cost);
			break;
		case '2':
			pageviewsCount.innerHTML = '50K';
			cost = 12;
			cost = (isDiscounted ? discountedAmount(cost) : cost);
			pageviewsCost.innerHTML = getDollars(cost);
			break;
		case '3':
			pageviewsCount.innerHTML = '100K';
			cost = 16;
			cost = (isDiscounted ? discountedAmount(cost) : cost);
			pageviewsCost.innerHTML = getDollars(cost);
			break;
		case '4':
			pageviewsCount.innerHTML = '500K';
			cost = 24;
			cost = (isDiscounted ? discountedAmount(cost) : cost);
			pageviewsCost.innerHTML = getDollars(cost);
			break;
		case '5':
			pageviewsCount.innerHTML = '1M';
			cost = 36;
			cost = (isDiscounted ? discountedAmount(cost) : cost);
			pageviewsCost.innerHTML = getDollars(cost);
			break;
	}
}

function toggleSwitch(e) {
	updatePageviews();
	let button = e.target;
	if (button.getAttribute('aria-pressed') === 'false') {
		button.setAttribute('aria-pressed', 'true');
	} else {
		button.setAttribute('aria-pressed', 'false');
	}
}

pageviewsRange.addEventListener('input', updatePageviews, false);
toggleSwitchButton.addEventListener('click', toggleSwitch, false);