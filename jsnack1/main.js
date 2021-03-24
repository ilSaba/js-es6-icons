console.log("funzia");

$(document).ready(() => {
	
// JSNACK 1
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore.
// Usiamo il forEach


const bici = [
    {
        nome: "MountainBike",
        peso: 10,      
    },    
    {
        nome: "Graziella",
        peso: 20,      
    },
    {
        nome: "BMX",
        peso: 5,      
    },
]

    let min = bici[0].peso;
    
    bici.forEach((item) => {
    if (item.peso < min) {
        min = item.peso
    }
});


    let biciPiccola = bici.filter((item) => item.peso == min);
    console.log(`La bici con peso minore è la ${biciPiccola[0].nome} e il peso è di ${biciPiccola[0].peso}`);
	
})

// FINITO E OK