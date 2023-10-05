// Napisz program, który używając dwóch zagnieżdżonych pętli while wydrukuje prostokąt z gwiazdek o wymiarach 5x5.
let row = 1;

while (row <= 5) {
  let column = 1;
  while (column <= 5) {
    process.stdout.write("* ");
    column++;
  }
  process.stdout.write("\n");
  row++;
}
// Napisz program, który wydrukuje trójkąt prostokątny z gwiazdek.
let height = 5;

for (let i = 1; i <= height; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row);
}
// Używając dwóch zagnieżdżonych pętli while, napisz program, który wygeneruje tabliczkę mnożenia dla liczb od 1 do 10.
let i = 1;

while (i <= 10) {
  let j = 1;

  while (j <= 10) {
    const result = i * j;
    process.stdout.write(`${i} * ${j} = ${result}\t`);
    j++;
  }

  process.stdout.write('\n');
  i++;
}
// Napisz program, który znajduje wspólne dzielniki dwóch liczb.
function findCommonDivisors(a, b) {
    const commonDivisors = [];
    const minNumber = Math.min(a, b);
  
    for (let i = 1; i <= minNumber; i++) {
      if (a % i === 0 && b % i === 0) {
        commonDivisors.push(i);
      }
    }
  
    return commonDivisors;
  }
  
num1 = 12; // Pierwsza liczba
num2 = 18; // Druga liczba
  
  const commonDivisors = findCommonDivisors(num1, num2);
  
  console.log(`Wspólne dzielniki ${num1} i ${num2}: ${commonDivisors.join(', ')}`);

// Napisz program, który wygeneruje macierz jednostkową (kwadratową) o wymiarach 3x3.
function generateIdentityMatrix(n) {
    const identityMatrix = [];
  
    for (let i = 0; i < n; i++) {
      const row = [];
  
      for (let j = 0; j < n; j++) {
        if (i === j) {
          row.push(1);
        } else {
          row.push(0);
        }
      }
  
      identityMatrix.push(row);
    }
  
    return identityMatrix;
  }
  
  const dimension = 3; // Wymiar macierzy jednostkowej (3x3)
  
  const identityMatrix = generateIdentityMatrix(dimension);
  
  console.log("Macierz jednostkowa 3x3:");
  for (let i = 0; i < dimension; i++) {
    console.log(identityMatrix[i].join(" "));
  }
//   Napisz program, który znajdzie największą wspólną wielokrotność (NWW) dwóch liczb.
function findGCD(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  function findLCM(a, b) {
    const gcd = findGCD(a, b);
    const lcm = (a * b) / gcd;
    return lcm;
  }
  
  num1 = 12;
  num2 = 18;
  
  const lcm = findLCM(num1, num2);
  
  console.log(`Największa wspólna wielokrotność (${num1}, ${num2}): ${lcm}`);
//   Napisz program, który znajdzie pierwiastki równania kwadratowego.
function findQuadraticRoots(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    const sqrtDiscriminant = Math.sqrt(Math.abs(discriminant));
    
    if (discriminant > 0) {
      const root1 = (-b + sqrtDiscriminant) / (2 * a);
      const root2 = (-b - sqrtDiscriminant) / (2 * a);
      return [root1, root2];
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      return [root];
    } else {
      const realPart = -b / (2 * a);
      const imaginaryPart = sqrtDiscriminant / (2 * a);
      return [
        `${realPart} + ${imaginaryPart}i`,
        `${realPart} - ${imaginaryPart}i`
      ];
    }
  }
  
  const a = 1; // Współczynnik a
  const b = -3; // Współczynnik b
  const c = 2; // Współczynnik c
  
  const roots = findQuadraticRoots(a, b, c);
  
  console.log("Pierwiastki równania kwadratowego:");
  console.log(roots.join(", "));
//   Napisz program, który sprawdzi, czy dana liczba jest potęgą 2.
function isPowerOfTwo(number) {
    if (number <= 0) {
      return false;
    }
  
    return (number & (number - 1)) === 0;
  }
  
  const num = 16; // Sprawdzana liczba
  
  if (isPowerOfTwo(num)) {
    console.log(`${num} jest potęgą liczby 2.`);
  } else {
    console.log(`${num} nie jest potęgą liczby 2.`);
  }
//   Napisz program, który będzie prostym kalkulatorem, wykonującym podstawowe operacje (dodawanie, odejmowanie, mnożenie, dzielenie).
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return "Nie można dzielić przez zero.";
    }
    return a / b;
  }
  
  const num1 = 10; // Pierwsza liczba
  const num2 = 5; // Druga liczba
  const operator = "+"; // Operator (możesz zmienić na "-", "*", "/" itp.)
  
  let result;
  
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      result = "Nieznany operator.";
  }
  
  console.log(`Wynik ${num1} ${operator} ${num2} = ${result}`);
//   Napisz program, który znajdzie daną liczbę w posortowanej tablicy używając wyszukiwania binarnego.
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Znaleziono element, zwracamy indeks
      } else if (arr[mid] < target) {
        left = mid + 1; // Przesuwamy lewą granicę
      } else {
        right = mid - 1; // Przesuwamy prawą granicę
      }
    }
  
    return -1; // Element nie został znaleziony
  }
  
  const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]; // Posortowana tablica
  const target = 7; // Szukana liczba
  
  result = binarySearch(sortedArray, target);
  
  if (result !== -1) {
    console.log(`Liczba ${target} została znaleziona na indeksie ${result}.`);
  } else {
    console.log(`Liczba ${target} nie została znaleziona w tablicy.`);
  }

//   Napisz program, który obliczy sumę pierwszych 10 wyrazów ciągu harmonicznego.
function harmonicSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += 1 / i;
    }
    return sum;
  }
  
  const n = 10; // Liczba wyrazów do zsumowania
  
  result = harmonicSum(n);
  
  console.log(`Suma pierwszych ${n} wyrazów ciągu harmonicznego wynosi: ${result}`);

//   Napisz program, który odwróci tablicę.
function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
  
  const originalArray = [1, 2, 3, 4, 5]; // Oryginalna tablica
  
  const reversedArray = reverseArray(originalArray);
  
  console.log("Oryginalna tablica:", originalArray);
  console.log("Odwrócona tablica:", reversedArray);

//   Napisz program, który przesunie elementy tablicy o jedno miejsce w prawo.
function shiftRight(arr) {
    const lastElement = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = lastElement;
  }
  
originalArray = [1, 2, 3, 4, 5]; // Oryginalna tablica
  
  shiftRight(originalArray);
  
  console.log("Tablica po przesunięciu w prawo:", originalArray);
  
//   Napisz program, który oblicza sumę i średnią arytmetyczną liczb wprowadzonych przez użytkownika.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numbers = [];

function getNumbers() {
  rl.question('Podaj liczbę (wpisz "koniec", aby zakończyć): ', (input) => {
    if (input.toLowerCase() === 'koniec') {
      rl.close();
      calculateSumAndAverage();
    } else {
      const number = parseFloat(input);
      if (!isNaN(number)) {
        numbers.push(number);
      } else {
        console.log('To nie jest poprawna liczba. Spróbuj ponownie.');
      }
      getNumbers();
    }
  });
}

function calculateSumAndAverage() {
  if (numbers.length === 0) {
    console.log('Nie podano żadnych liczb.');
  } else {
    const sum = numbers.reduce((acc, current) => acc + current, 0);
    const average = sum / numbers.length;
    console.log(`Suma liczb: ${sum}`);
    console.log(`Średnia arytmetyczna: ${average}`);
  }
  rl.close();
}

getNumbers();

// Napisz program, który sprawdza, czy dwie liczby są względnie pierwsze.
function calculateGCD(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  function areRelativelyPrime(num1, num2) {
    const gcd = calculateGCD(num1, num2);
    return gcd === 1;
  }
  
   num1 = 8; // Pierwsza liczba
   num2 = 15; // Druga liczba
  
  if (areRelativelyPrime(num1, num2)) {
    console.log(`${num1} i ${num2} są względnie pierwsze.`);
  } else {
    console.log(`${num1} i ${num2} nie są względnie pierwsze.`);
  }

//   Napisz program, który narysuje diament z gwiazdek.
function drawDiamond(n) {
    if (n % 2 === 0) {
      n++; // Upewniamy się, że n jest liczbą nieparzystą
    }
  
    const halfN = Math.floor(n / 2);
  
    for (let i = 0; i < n; i++) {
      let row = '';
  
      for (let j = 0; j < Math.abs(halfN - i); j++) {
        row += ' ';
      }
  
      for (let k = 0; k < n - 2 * Math.abs(halfN - i); k++) {
        row += '*';
      }
  
      console.log(row);
    }
  }
  
  const numberOfRows = 5; // Liczba poziomych linii (możesz zmienić na inną liczbę)
  
  drawDiamond(numberOfRows);

//   Napisz program, który znajduje wszystkie liczby od 1 do 1000, dla których suma ich cyfr jest podzielna przez 3.
function isSumOfDigitsDivisibleBy3(number) {
    let sumOfDigits = 0;
    let num = number;
  
    while (num > 0) {
      sumOfDigits += num % 10;
      num = Math.floor(num / 10);
    }
  
    return sumOfDigits % 3 === 0;
  }
  
  function findNumbersDivisibleBy3() {
    const numbersDivisibleBy3 = [];
  
    for (let i = 1; i <= 1000; i++) {
      if (isSumOfDigitsDivisibleBy3(i)) {
        numbersDivisibleBy3.push(i);
      }
    }
  
    return numbersDivisibleBy3;
  }
  
   result = findNumbersDivisibleBy3();
  
  console.log("Liczby od 1 do 1000, których suma cyfr jest podzielna przez 3:");
  console.log(result.join(", "));
//   Napisz program, który sortuje tablicę liczb całkowitych używając sortowania bąbelkowego.
function bubbleSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      let swapped = false;
  
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // Zamiana miejscami gdy obecny element większy od następnego
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }
  
      // Jeśli wewnętrzna pętla nie dokonała żadnej zamiany, tablica jest już posortowana
      if (!swapped) {
        break;
      }
    }
  }
  
  numbers = [64, 34, 25, 12, 22, 11, 90]; // Tablica do posortowania
  
  bubbleSort(numbers);
  
  console.log("Posortowana tablica:", numbers);
//   Napisz program, który generuje pierwsze 10 liczb Fibonacciego.
function generateFibonacci(n) {
    const fibonacciArray = [0, 1]; // Początkowe dwie liczby w ciągu
  
    for (let i = 2; i < n; i++) {
      const nextFibonacci = fibonacciArray[i - 1] + fibonacciArray[i - 2];
      fibonacciArray.push(nextFibonacci);
    }
  
    return fibonacciArray;
  }
  
  n = 10; // Liczba liczb Fibonacciego do wygenerowania
  
  const fibonacciNumbers = generateFibonacci(n);
  
  console.log(`Pierwsze ${n} liczb Fibonacciego:`);
  console.log(fibonacciNumbers.join(", "));
//   Napisz program, który znajduje sumę cyfr danej liczby.
function sumOfDigits(number) {
    let sum = 0;
    let num = Math.abs(number); // Zabezpieczenie przed liczbami ujemnymi
  
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
  
    return sum;
  }
  
  num = 12345; // Wprowadzona liczba
  
  result = sumOfDigits(num);
  
  console.log(`Suma cyfr liczby ${num} wynosi: ${result}`);
  
//   Napisz program, który znajduje największy wspólny dzielnik (NWD) dwóch liczb.
function findGCD(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  num1 = 48; // Pierwsza liczba
  num2 = 36; // Druga liczba
  
  const gcd = findGCD(num1, num2);
  
  console.log(`Największy wspólny dzielnik (${num1}, ${num2}): ${gcd}`);
  
//   Napisz program, który znajduje silnię liczby.
function calculateFactorial(n) {
    if (n < 0) {
      return "Silnia jest zdefiniowana tylko dla liczb nieujemnych.";
    } else if (n === 0 || n === 1) {
      return 1;
    } else {
      let factorial = 1;
      for (let i = 2; i <= n; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  
  num = 5; // Liczba, dla której obliczamy silnię
  
  const factorial = calculateFactorial(num);
  
  if (typeof factorial === 'number') {
    console.log(`Silnia z ${num} wynosi: ${factorial}`);
  } else {
    console.log(factorial);
  }

//   Napisz program, który wygeneruje tabliczkę mnożenia dla zadanej liczby.
function multiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
      const result = n * i;
      console.log(`${n} * ${i} = ${result}`);
    }
  }
  
  const number = 7; // Wybrana liczba
  
  console.log(`Tabliczka mnożenia dla liczby ${number}:`);
  multiplicationTable(number);

//   Napisz program, który używając pętli while wydrukuje liczby od 10 do 1.
i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}

// Napisz program, który znajduje wszystkie liczby od 1 do 100, które są podzielne przez 7.
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
      console.log(i);
    }
  }

//   Napisz program, który dodaje liczby wprowadzone przez użytkownika, dopóki nie wpisze on 'stop'.
const readline = require('readline');

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let sum = 0;

function addNumbers() {
  rl.question('Podaj liczbę (wpisz "stop", aby zakończyć): ', (input) => {
    if (input.toLowerCase() === 'stop') {
      console.log(`Suma wprowadzonych liczb wynosi: ${sum}`);
      rl.close();
    } else {
      const number = parseFloat(input);
      if (!isNaN(number)) {
        sum += number;
      } else {
        console.log('To nie jest poprawna liczba. Spróbuj ponownie.');
      }
      addNumbers();
    }
  });
}

addNumbers();
// Napisz program, który oblicza długość stringa bez używania wbudowanej funkcji .length.
function calculateStringLength(str) {
    let length = 0;
    while (str[length] !== undefined) {
      length++;
    }
    return length;
  }
  
  const text = "To jest przykładowy string"; // Twój string
  
  const length = calculateStringLength(text);
  
  console.log(`Długość stringa: ${length}`);

//   Napisz program, który wygeneruje macierz jednostkową (kwadratową) o wymiarach 3x3.
function generateIdentityMatrix(n) {
    const identityMatrix = [];
  
    for (let i = 0; i < n; i++) {
      const row = [];
  
      for (let j = 0; j < n; j++) {
        if (i === j) {
          row.push(1);
        } else {
          row.push(0);
        }
      }
  
      identityMatrix.push(row);
    }
  
    return identityMatrix;
  }
  
  dimension = 3; // Wymiar macierzy jednostkowej (3x3)
  
  identityMatrix = generateIdentityMatrix(dimension);
  
  console.log("Macierz jednostkowa 3x3:");
  for (let i = 0; i < dimension; i++) {
    console.log(identityMatrix[i].join(" "));
  }
//   Napisz program, który znajdzie największą wspólną wielokrotność (NWW) dwóch liczb.
function findGCD(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  function findLCM(a, b) {
    const gcd = findGCD(a, b);
    const lcm = (a * b) / gcd;
    return lcm;
  }
  
  num1 = 12; // Pierwsza liczba
  num2 = 18; // Druga liczba
  
  lcm = findLCM(num1, num2);
  
  console.log(`NWW (${num1}, ${num2}): ${lcm}`);
//   Napisz program, który znajdzie pierwiastki równania kwadratowego.
function findRoots(a, b, c) {
    const discriminant = b * b - 4 * a * c;
  
    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return [root1, root2];
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      return [root];
    } else {
      return [];
    }
  }
  
  a = 1; // Współczynnik przy x^2
  b = -3; // Współczynnik przy x
  c = 2; // Wyraz wolny
  
  roots = findRoots(a, b, c);
  
  if (roots.length === 0) {
    console.log("Równanie kwadratowe nie ma pierwiastków rzeczywistych.");
  } else if (roots.length === 1) {
    console.log(`Pierwiastek równania kwadratowego: x = ${roots[0]}`);
  } else {
    console.log(`Pierwiastki równania kwadratowego: x1 = ${roots[0]}, x2 = ${roots[1]}`);
  }
//   Napisz program, który znajdzie daną liczbę w posortowanej tablicy używając wyszukiwania binarnego.
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Znaleziono szukaną liczbę, zwraca indeks
      } else if (arr[mid] < target) {
        left = mid + 1; // Przesunięcie lewej granicy
      } else {
        right = mid - 1; // Przesunięcie prawej granicy
      }
    }
  
    return -1; // Liczba nie została znaleziona w tablicy
  }
  
  sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]; // Posortowana tablica
  const targetNumber = 11; // Szukana liczba
  
  const index = binarySearch(sortedArray, targetNumber);
  
  if (index !== -1) {
    console.log(`Liczba ${targetNumber} została znaleziona na indeksie ${index}.`);
  } else {
    console.log(`Liczba ${targetNumber} nie została znaleziona w tablicy.`);
  }
//   Napisz program, który obliczy sumę pierwszych 10 wyrazów ciągu harmonicznego.
function calculateHarmonicSeriesSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += 1 / i;
    }
    return sum;
  }
  
  n = 10; // Liczba wyrazów ciągu do zsumowania
  
  const harmonicSum = calculateHarmonicSeriesSum(n);
  
  console.log(`Suma pierwszych ${n} wyrazów ciągu harmonicznego: ${harmonicSum}`);

//   Napisz program, który odwróci tablicę.
function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
  
  originalArray = [1, 2, 3, 4, 5]; // Tablica do odwrócenia
  
  reversedArray = reverseArray(originalArray);
  
  console.log("Oryginalna tablica:", originalArray);
  console.log("Odwrócona tablica:", reversedArray);
// Napisz program, który przesunie elementy tablicy o jedno miejsce w prawo.
function shiftRight(arr) {
    const lastIndex = arr.length - 1;
    const lastElement = arr[lastIndex];
  
    for (let i = lastIndex; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
  
    arr[0] = lastElement;
  }
  
  const myArray = [1, 2, 3, 4, 5]; // Tablica do przesunięcia
  
  console.log("Oryginalna tablica:", myArray);
  shiftRight(myArray);
  console.log("Tablica po przesunięciu:", myArray);
  
//   Napisz program, który oblicza sumę i średnią arytmetyczną liczb wprowadzonych przez użytkownika.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numbers = [];

function getUserInput() {
  rl.question('Podaj liczbę (wpisz "koniec", aby zakończyć): ', (input) => {
    if (input.toLowerCase() === 'koniec') {
      rl.close();
    } else {
      const number = parseFloat(input);
      if (!isNaN(number)) {
        numbers.push(number);
        getUserInput();
      } else {
        console.log('To nie jest poprawna liczba. Spróbuj ponownie.');
        getUserInput();
      }
    }
  });
}

getUserInput();

rl.on('close', () => {
  if (numbers.length === 0) {
    console.log('Nie wprowadzono żadnych liczb.');
  } else {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / numbers.length;

    console.log(`Suma wprowadzonych liczb: ${sum}`);
    console.log(`Średnia arytmetyczna wprowadzonych liczb: ${average}`);
  }
});

// Napisz program, który sprawdza, czy dwie liczby są względnie pierwsze.
function findGCD(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  function areCoprime(x, y) {
    const gcd = findGCD(x, y);
    return gcd === 1;
  }
  
  const num1 = 15; // Pierwsza liczba
  const num2 = 28; // Druga liczba
  
  const coprime = areCoprime(num1, num2);
  
  if (coprime) {
    console.log(`${num1} i ${num2} są względnie pierwsze.`);
  } else {
    console.log(`${num1} i ${num2} nie są względnie pierwsze.`);
  }

//   Napisz program, który znajduje wszystkie liczby od 1 do 1000, dla których suma ich cyfr jest podzielna przez 3.
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  
  const numbersDivisibleBy3 = [];
  
  for (let i = 1; i <= 1000; i++) {
    if (sumOfDigits(i) % 3 === 0) {
      numbersDivisibleBy3.push(i);
    }
  }
  
  console.log("Liczby od 1 do 1000, których suma cyfr jest podzielna przez 3:");
  console.log(numbersDivisibleBy3.join(", "));

//   Napisz program, który posortuje tablicę liczb całkowitych używając sortowania bąbelkowego.
function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
  
    do {
      swapped = false;
  
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Zamiana miejscami, jeśli elementy są w złej kolejności
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  }
  
  const myArray = [64, 25, 12, 22, 11]; // Tablica do posortowania
  
  console.log("Oryginalna tablica:", myArray);
  bubbleSort(myArray);
  console.log("Posortowana tablica:", myArray);

//   Napisz program, który generuje pierwsze 10 liczb Fibonacciego.
function generateFibonacci(n) {
    const fibonacciNumbers = [0, 1]; // Pierwsze dwa elementy ciągu
  
    for (let i = 2; i < n; i++) {
      const nextFibonacci = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
      fibonacciNumbers.push(nextFibonacci);
    }
  
    return fibonacciNumbers;
  }
  
  const count = 10; // Liczba liczb Fibonacciego do wygenerowania
  
  const fibonacciSequence = generateFibonacci(count);
  
  console.log(`Pierwsze ${count} liczb Fibonacciego:`);
  console.log(fibonacciSequence.join(", "));

//   Napisz program, który sprawdza, czy dany string jest palindromem.
function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/\s/g, '');
  
    const reversedStr = cleanedStr.split('').reverse().join('');
  
    return cleanedStr === reversedStr;
  }
  
  const inputString = "Madam Arora teaches Malayalam"; 
  
  if (isPalindrome(inputString)) {
    console.log(`"${inputString}" jest palindromem.`);
  } else {
    console.log(`"${inputString}" nie jest palindromem.`);
  }
  