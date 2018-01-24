Util = {};

/**
 * Calcule la factorielle d'un nombre n. Exp : 5! = 5 * 4 * 3 * 2 * 1
 * @param {number} n
 * @returns {number}
 */
Util.factorial = function(n) {

    if (n < 0) {
        throw 'Unable to compute factorial for n < 0'
    }

    if (!(typeof n === "number") || Math.floor(n) !== n) {
        throw 'Unable to compute factorial of non integer values'
    }

    if (n >= 100) {
        throw 'Unable to compute factorial for n > 100'
    }

    if (0 === n) {
        return 1;
    }

    return n * Util.factorial(n - 1);
};

/**
 * Calcule la disposition ordonnée de r éléments dans un ensemble de n elements.
 * Formule: Util.arrangement(n, r) = n! / (n - r)!
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
Util.arrangement = function(n, r) {
	if (n < 0) {
        throw 'Unable to compute arrangement for n < 0'
    }

    if (n === r) {
        throw 'Unable to compute arrangement for n = r'
    }

    if (!(typeof n === "number") || Math.floor(n) !== n) {
        throw 'Unable to compute arrangement of non integer values'
    }

    if(!(typeof r === "number") || Math.floor(r) !== r)
		throw 'Unable to compute arrangement of non integer values'

	return Util.factorial(n) / Util.factorial(n - r);
};

/**
 * Calcule la disposition non ordonnée de r éléments dans un ensemble de n elements.
 * Formule: Util.combination(n, r) = n! / (n - r)!r!
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
Util.combination = function(n, r) {
	if (n < 0) {
        throw 'Unable to compute combination for n < 0'
    }

    if (r < 0) {
        throw 'Unable to compute combination for r < 0'
    }

    if (n === r) {
        throw 'Unable to compute combination for n = r'
    }

    if (!(typeof n === "number") ||  Math.floor(n) !== n) {
        throw 'Unable to compute combination of non integer values'
    }

    if(!(typeof r === "number") || Math.floor(r) !== r){
    	throw 'Unable to compute combination of non integer values'
    }

	return Util.factorial(n) / (Util.factorial(n - r) * Util.factorial(r));
};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function(n) {
	if (!(typeof n === "number")) {
        throw 'Unable to compute isPrime of non integer values'
    }

    if (n < 0) {
        throw 'Unable to compute isPrime for n < 0'
    }

	if(n === 2 || n === 1)
    	return true;
  
  	if(n%2 === 0)
    	return false;
  
  	var racine=Math.sqrt(n);
  	if(Number.isInteger(n))
    	return false;

  	for(var i=3; i<racine; i+=2){
    	if(n%i === 0){
      		return false;
    	}
  	}
  
  	return true;
};


/**
 * Additionne l'ensemble des nombres de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n) {
	
};

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n) {
	if (!(typeof n === "number")) {
    	throw 'Unable to compute fizzBuzz of non integer values'
    }
    if (n < 0) {
        throw 'Unable to compute fizzBuzz for n < 0'
    }

	var res = [];
	for(i=1; i<=n; i++){
		if(i%3 == 0 && i%5 == 0){
			res[i-1]="FizzBuzz";
		}else if(i%3 == 0){
			res[i-1]="Fizz";
		}else if(i%5 == 0){
			res[i-1]="Buzz";
		}else{
			res[i-1]=i;
		}
	}
};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Tojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (phrase) {

};
