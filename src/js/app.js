import createHTMl from './createHTML';

const arrayJSON = [
  {
    "id": 26,
    "title": "Побег из Шоушенка",
    "imdb": 9.30,
    "year": 1994
  },
  {
    "id": 25,
    "title": "Крёстный отец",
    "imdb": 9.20,
    "year": 1972
  },
  {
    "id": 27,
    "title": "Крёстный отец 2",
    "imdb": 9.00,
    "year": 1974
  },
  {
    "id": 1047,
    "title": "Тёмный рыцарь",
    "imdb": 9.00,
    "year": 2008
  },
  {
    "id": 223,
    "title": "Криминальное чтиво",
    "imdb": 8.90,
    "year": 1994
  }
];

createHTMl(arrayJSON, false);
/*let tableEl = document.querySelector('.table');

let stringEl = document.createElement('tr');

stringEl.innerHTML = `<td class="heading">id</td>
<td class="heading">title</td>
<td class="heading">year</td>
<td class="heading">imdb</td>`;

tableEl.insertAdjacentElement('beforeend', stringEl);


arrayJSON.forEach(element => {
	stringEl = document.createElement('tr');
	stringEl.innerHTML += `<td class="cell">${element.id}</td>
	<td class="cell">${element.title}</td>
	<td class="cell">${element.year}</td>
	<td class="cell">imdb: ${element.imdb.toFixed(2)}</td>`;
	tableEl.insertAdjacentElement('beforeend', stringEl); 
});


	//tableEl = document.createElement('table');
	//tableEl2.classList.add('table');*/
	setTimeout(() => {
		arrayJSON.sort((a, b) => {
			if (a.id > b.id) {
				return 1;
			};
			
			if (a.id < b.id) {
				return -1;
			};
			
			return 0;
		});
	
		createHTMl(arrayJSON, true);
	}, 15000)
	

	/*tableEl.innerHTML = '';

	stringEl = document.createElement('tr');

	stringEl.innerHTML = `<td class="heading">id <img class="image" src="./img/down-icon.png" alt="альтернативный текст"></td>
	<td class="heading">title</td>
	<td class="heading">year</td>
	<td class="heading">imdb</td>`;
	
	tableEl.insertAdjacentElement('beforeend', stringEl);
		
	arrayJSON.forEach(element => {
		stringEl = document.createElement('tr');
		stringEl.innerHTML += `<td class="cell">${element.id}</td>
		<td class="cell">${element.title}</td>
		<td class="cell">${element.year}</td>
		<td class="cell">imdb: ${element.imdb.toFixed(2)}</td>`;
		tableEl.insertAdjacentElement('beforeend', stringEl); 
	});
	
arrayJSON.sort((a, b) => {
	if (a.id > b.id) {
    return 1;
	};
	
  if (a.id < b.id) {
    return -1;
	};
	
  return 0;
});

const tableEl = document.createElement('table');

arrayJSON.forEach(element => {
	let el = document.createElement('tr');
	el.classList.add('')
})*/
