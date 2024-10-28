//inversion d'une chaine

function inverserChaine(chaine){
    return chaine.split('Bonjour').reverse().join('Bonjour');
}
console.log(inverserChaine("Bonjour"));

// caractere
function compterCaracteres(chaine) {
    return chaine.length;
}
console.log(compterCaracteres("Chiffre"));

//mettre les mots en majuscule
function mettreEnMajuscule(model) {
    return model.split(' ').map(mot => mot.charAt(0).toUpperCase() + mot.slice(1)).join(' ');
}
console.log(mettreEnMajuscule("bonjour le monde"));


// Fonctions du tableau
	// Trouver le maximum 

function trouverMaximum(tab) {
    return Math.max(tab);
}
const tableau = [3, 5, 1, 8, 2];
console.log(trouverMaximum(tableau)); 


	// Trouver le minimum 

function trouverMinimum(tab) {
    return Math.min(tab);
}
console.log(trouverMinimum(tableau));

// Somme du tableau 

function sommeTableau(tab) {
    return tab.reduce((acc, val) => acc + val, 0);
}
console.log(sommeTableau(tableau)); 

	// Filtrer un tableau 

function filtrerTableau(tab, condition) {
    return tab.filter(condition);
}
console.log(filtrerTableau(tableau, nombre => nombre > 6));

// Fonctions mathématiques
	// Factorielle 
    function factorielle(n) {
        if (n < 0) return undefined;
        if (n === 0 || n === 1) return 1;
        let resultat = 1;
        for (let i = 2; i <= n; i++) {
            resultat *= i;
        }
        return resultat;
    }
console.log(factorielle(5));


	// Vérification des nombres premiers 

function estPremier(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(estPremier(7)); 


//   Séquence de Fibonacci 

function fibonacci(n) {
    const sequence = [0, 1];
    for (let f = 2; f < n; f++) {
        sequence.push(sequence[f - 1] + sequence[f - 2]);
    }
    return sequence.slice(0, n);
}
console.log(fibonacci(10));