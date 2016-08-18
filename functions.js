Exercise 1:
function combineWords(word1, word2) {
    return word1 + word2
}

var result = combineWords('dog', 'house');
console.log(result);

Exercise 2:
function repeatPhrase(phrase, n) {
    for (var n; n > 0; n--) {
        console.log(phrase);
    }
}

repeatPhrase("Hello", 5);

Exercise 3:
function toTheNthPower(number, power) {
      var result = 1;
      for (var x = 0; x < power; x++) {
          result *= number;
      }
      return result;
 }

 Exercise 4:
 function areaOfACircle(radius) {
     return 3.1415 * (radius * radius);
 }

 var result = areaOfACircle(2);
 console.log(result);

 Exercise 5:
 function pythagoreanTheorem(a, b) {
     return Math.sqrt((a * a) + (b * b));
 }

 var result = pythagoreanTheorem(3, 4);
 console.log(result);

 Exercise 6:
 function isXEvenlyDivisibleByY(x, y) {
    if (x % y == 0) {
    return true;
    } else {
        return false;
    }
}

var result = isXEvenlyDivisibleByY(99, 3);
console.log(result);

Exercise 7:
function countVowels(word) {
	var vowels = 0;
	for(var i = 0; i < word.length; i++) {
		if( word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' ||  word[i] === 'u' ||  word[i] === 'y'){
			vowels++;
		}
	}
	return vowels;
}

Exercise 8:
function findWdi(arr){
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === 'wdi') {
            return true; }
}
return false;
}

Exercise 9:
function printTriangle(length) {
   for (var i = 1; i <= length; i++) {
       var level = '';
    for (var n = 0; n < i; n++){
        level += '*';
   }
   console.log(level);
} }

printTriangle(5);
