/**
  Logger helper function
*/

function logger() {
  var loggerEl = document.getElementById('logger');
  return function(str, color) {
    if (!color) {
      loggerEl.innerHTML += str + '\n';
    } else {
      loggerEl.innerHTML +=
        '<em style="color: ' + color + ';">' + str + '</em>' + '\n';
    }
  }
}

var log = logger();

log(`
////////////////////////////////////////////////////////
// CODING CHALLENGE 1
////////////////////////////////////////////////////////

John and a friend invented a simple game where the player with the highest
value of his height (in centimeters) plus five times his age wins
(what a silly game :)

1. Create variables for the heights and ages of two friends and assign
them some values

2. Calculate their scores

3. Decide who wins and print the winner to the console. Include the score
in the string that you output to the console. Don't forget that there
can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need
the && operator to take the decision. If you can't solve this one, just watch
the solution, it's no problem :)
`, 'grey');

var heightJohn = 185;
var ageJohn = 25;

var heightMarc = 185;
var ageMarc = 30;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMarc = heightMarc + 5 * ageMarc;

var name;
var score = scoreJohn - scoreMarc;

var heightOther = 190;
var ageOther = 30;
var scoreOther = heightOther + 5 * ageOther;

if (scoreJohn > scoreMarc && scoreJohn > scoreOther) {
  name = 'John';
  log('the winner is: ' + name + ' with a score of: ' + scoreJohn);
} else if (scoreJohn < scoreMarc && scoreMarc > scoreOther) {
    name = 'Marc';
    log('the winner is: ' + name +
    ' with a score of: ' + scoreMarc);
} else if (scoreOther > scoreJohn && scoreOther > scoreMarc) {
  name = 'Other';
  log('the winner is: ' + name +
  ' with a score of: ' + scoreOther);

} else {
  log('it\'s a draw!');
}


log(`
////////////////////////////////////////////////////////
// CODING CHALLENGE 2
////////////////////////////////////////////////////////
//

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full
age (18 or older), as well as their age
5. Finally, create a function called printFullAge which receives the array of
years as an argument, executes the steps 2., 3. and 4. and returns an array
of true/false boolean values: true if the person is of full age (>= 18 years)
and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two
variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]
`, 'grey');

function printFullAge(years) {
  var fullAges = [];
  var ages = [];

  for (var i = 0; i < years.length; i++) {
    ages[i] = 2018 - years[i];
  }

  for (i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
      log('Person ' + (i+1) + ' is ' + ages[i] + ' years old, and is of full age.');
      fullAges.push('true');
    } else {
      log('Person ' + (i+1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
      fullAges.push('false');
    }
  }

  return fullAges;
}

years = [1987, 2001, 1967, 2016, 1995, 1931]
var full_1 = printFullAge(years);
var full_2 = printFullAge([1990, 2010, 2002, 1931]);
log(full_1);
log(full_2);
