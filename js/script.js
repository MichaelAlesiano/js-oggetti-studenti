// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// Prima parte
var studente = {
  'nome' : 'Michael',
  'cognome' : 'Alesiano',
  'eta' : 21
};

// console.log(studente);

// Seconda parte
var studenti = [
  {
    'nome' : 'Mario',
    'cognome' : 'Rossi',
    'eta' : 21
  },
  {
    'nome' : 'Gioele',
    'cognome' : 'Verdi',
    'eta' : 24
  },
  {
    'nome' : 'Marco',
    'cognome' : 'Gialli',
    'eta' : 28
  },
];

for (var i = 0; i < studenti.length; i++) {
    // console.log(studenti[i].nome + ' ' + studenti[i].cognome);
}

// Terza parte
var nome = prompt('Inserisci il tuo nome..');
var cognome = prompt('Inserisci il tuo cognome..');
var eta = prompt('Inserisci la tua età..');

var nuovoStudente = {
  'nome' : nome,
  'cognome' : cognome,
  'eta' : eta
};

studenti.push(nuovoStudente);

console.log(studenti);
