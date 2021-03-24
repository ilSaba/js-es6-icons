console.log("ok");
$(document).ready(() => {

const dati = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

// Milestone 1:

//  Faccio un ciclo forEach:

 dati.forEach((item, i) => {
 
   let nomeEl = `<span>${item.name}</span>`;
   let iconEl = `<i class="${item.family} ${item.prefix}${item.name}"></i>`
   let element = `<div>${iconEl} ${nomeEl}</div>`;
   $('#icon').append(element);
 });


 // Milestone 2:

 const colori = [
	'blue',
	'yellow',
	'purple'
  ];
 
  const datiColors = dati.map((item, i, array) => {
   if (item.type == "animal") {
	 let obj = {
	   ...item,
	   color: colori[0]
	 };
	 return obj;
   } else if (item.type == "vegetable") {
	 let obj = {
	   ...item,
	   color: colori[1]
	 };
	 return obj;
   } else {
	 let obj = {
	   ...item,
	   color: colori[2]
	 };
	 return obj;
   }
  });
 
  console.log(datiColors);
  datiColors.forEach((item, i) => {
  
    let nomeEl = `<span>${item.name}</span>`;
    let iconEl = `<i class="${item.family} ${item.prefix}${item.name} icon-${item.color}"></i>`
    let element = `<div>${iconEl} ${nomeEl}</div>`;
    $('#icon').append(element);
  });


});