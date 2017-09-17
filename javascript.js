// Podaci sa servera za 1, 2, 3 zadatak

var testObjekat = {
  naziv: "Startit kurs pravljenja sajtova",
  trajanjeNedelja: 33,
  predavac: {
    ime: "Petar",
    prezime: "Popovic"
  },
  ocenePolaznika: [3, 2, 7, 4, 8, 1, 9, 2, 10, 10, 3, 6, 3, 1, 7, 3, 5, 4, 10, 9, 1, 9],
  organizacija: "Startit",
  kursJosTraje: true
};

// Podaci sa servera za 4, 5 zadatak

var people = [
  {
    name: 'Joe Schmoe',
    yearsExperience: 1,
    department: 'IT'
  },
  {
    name: 'Sally Sallerson',
    yearsExperience: 15,
    department: 'Engineering'
  },
  {
    name: 'Bill Billson',
    yearsExperience: 5,
    department: 'Engineering'
  },
  {
    name: 'Jane Janet',
    yearsExperience: 11,
    department: 'Management'
  },
  {
    name: 'Bob Hope',
    yearsExperience: 9,
    department: 'IT'
  }
];

//--------------------

//ZADATAK 1

//------------------------------

var okidac = ocenaOdDeset(testObjekat);

function ocenaOdDeset(objekat) {

	//napravi nov niz koji kopira vrednosti starog
	var ocenePolaznikaOdDeset = objekat.ocenePolaznika.slice();

	//dodaj svakoj vrednosti string /10
	for (var i = 0; i<ocenePolaznikaOdDeset.length; i++) {
		ocenePolaznikaOdDeset[i] = ocenePolaznikaOdDeset[i] + '/10'
	}
console.log(objekat.ocenePolaznika);
console.log(ocenePolaznikaOdDeset);
};

//------------------------------

//ZADATAK 1 na drugi nacin
// posto je .slice pomalo cheat i mislim da masim poentu

// ------------------------------

var okidac = ocenaOdDeset(testObjekat);

function ocenaOdDeset(objekat) {

	var noviNizOcena = [];

	for (var i = 0; i<objekat.ocenePolaznika.length; i++) {
		noviNizOcena.push(objekat.ocenePolaznika[i] + '/10');
	}

console.log(objekat.ocenePolaznika);
console.log(noviNizOcena);
};

//------------------------------

//ZADATAK 3

//-------------------------------

var ocene = jaSamBudala(testObjekat.ocenePolaznika.slice(0));

function jaSamBudala (ocene) {

var zbir = 0;
var prosek;
//saberi sve ocene u nizu
    for (i=0; i<ocene.length; i++) {
        zbir += ocene[i];
    }
//podeli zbir ocena sa brojem ocena
prosek = zbir / ocene.length;
console.log(prosek);
}

//---------------------------------

//ZADATAK 4

//---------------------------------

var zbir = 0;

for (i = 0; i<people.length; i++) {
	zbir += people[i].yearsExperience;
}
console.log(people[0].name + ', ' + people[1].name + ', ' + people[2].name + ', ' + people[3].name + ' and ' + people[4].name + ' have '  + zbir + ' years of experience combined.');

//---------------------------------

//ZADATAK 5

//---------------------------------

// nesto mi govori da sam omasio temu totalno jer sam samo shlapnuo objekat i u njega ubacio promenjive vrednosti, primitivno resenje

var zbirIt = 0;
var zbirEngineering = 0;
var zbirManagement = 0;

for (i = 0; i<people.length; i++) {
	if (people[i].department == 'IT') {
		zbirIt += people[i].yearsExperience;
	} else if (people[i].department == 'Engineering') {
		zbirEngineering += people[i].yearsExperience;
	} else if (people[i].department == 'Management') {
		zbirManagement += people[i].yearsExperience;
	}
}

var departmentExperience = {
	Engineering: zbirEngineering,
	IT: zbirIt,
	Management: zbirManagement
}

console.log(departmentExperience);

//---------------------------------