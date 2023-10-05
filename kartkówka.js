// 1.Napisz program generujący tabliczkę mnożenia od 1 do 10.
let pierwszaLiczba = 1;
let ostatniaLiczba = 10;

while (pierwszaLiczba <= ostatniaLiczba) {
  let drugaLiczba = 1;
  let row = "";

  while (drugaLiczba <= ostatniaLiczba) {
    const wynik = pierwszaLiczba * drugaLiczba;
    row += `${wynik}\t`;

    drugaLiczba++;
  }

  console.log(row);
  pierwszaLiczba++;
}

  
// 2.Zmodyfikuj wcześniejszy program i wygeneruj listę kochamProgrmowac zawierającą wszystkie liczby z poprzedniego zadania i spierwiastój wszystkie wartości znajdujące się pod indeksami podzielnymi przez 7. 
const kochamProgrmowac = [];

for (let i = 1; i <= 100; i++) {
    const result = i % 7 === 0 ? Math.sqrt(i) : i;
    kochamProgrmowac.push(result);
}

console.log(kochamProgrmowac);
  
  
// // 3.Sprawdź których liczb jest więcej parzystych czy nieparzystych (kochamProgrmowac )
const kochamProgrmowac = [];

for (let i = 1; i <= 100; i++) {
    const result = i % 7 === 0 ? Math.sqrt(i) : i;
    kochamProgrmowac.push(result);
}

let parzyste = 0;
let nieparzyste = 0;

for (let i = 0; i < kochamProgrmowac.length; i++) {
    if (kochamProgrmowac[i] % 2 === 0) {
        parzyste++;
    } else {
        nieparzyste++;
    }
}

if (parzyste > nieparzyste) {
    console.log("Więcej liczb parzystych.");
} else if (nieparzyste > parzyste) {
    console.log("Więcej liczb nieparzystych.");
} else {
    console.log("Liczba liczb parzystych i nieparzystych jest taka sama.");
}

  
// // 4.Podziel 97 przez wszystkie liczby z otrzymanej listy kochamProgrmowac. Jeśli rozwinięcie dziesiętne znajduje się w przedziale od 0.1 > i   <0.4. Umieść liczby w newList. Pozbądź się z listy powtarzających się liczb i wyświetl tą listę 

function rozwinięcieDziesiętneNaLiczbe(rozwinięcie) {
    return parseFloat(rozwinięcie.replace(',', '.'));
  }
  
  function liczbaNaRozwinięcieDziesiętne(liczba) {
    return liczba.toFixed(2).toString().replace('.', ',');
  }
  
  function przetwarzajListę(lista) {
    const newList = [];
    const unikalneLiczby = new Set();
  
    lista.forEach((element) => {
      const wynik = 97 / element;
      const rozwinięcie = liczbaNaRozwinięcieDziesiętne(wynik);
  
      if (rozwinięcie >= 0.1 && rozwinięcie < 0.4) {
        if (!unikalneLiczby.has(rozwinięcie)) {
          unikalneLiczby.add(rozwinięcie);
          newList.push(rozwinięcie);
        }
      }
    });
  
    return newList;
  }
  
  const wynikowaLista = przetwarzajListę(listaKochamProgramowac);
  console.log(wynikowaLista);
  
// // 5.Wygeneruj macierz jednostkową. 
// function generujMacierzJednostkowa(rozmiar) {
//     const macierz = [];
  
//     for (let i = 0; i < rozmiar; i++) {
//       const wiersz = [];
//       for (let j = 0; j < rozmiar; j++) {
//         if (i === j) {
//           wiersz.push(1);
//         } else {
//           wiersz.push(0);
//         }
//       }
//       macierz.push(wiersz);
//     }
  
//     return macierz;
//   }
  
//   const rozmiar = 3;
//   const macierzJednostkowa = generujMacierzJednostkowa(rozmiar);
//   console.log(macierzJednostkowa);
  
// // 6.Napisz skrypt, który utworzy listę liczb pierwszych z zakresu od 1 do 200. Wyświetl ją. 
// function czyLiczbaPierwsza(liczba) {
//     if (liczba <= 1) return false;
//     if (liczba <= 3) return true;
  
//     if (liczba % 2 === 0 || liczba % 3 === 0) return false;
  
//     let i = 5;
//     while (i * i <= liczba) {
//       if (liczba % i === 0 || liczba % (i + 2) === 0) return false;
//       i += 6;
//     }
  
//     return true;
//   }
  
//   function znajdzLiczbyPierwszeZakres(rozpoczecie, zakonczenie) {
//     const liczbyPierwsze = [];
  
//     for (let i = rozpoczecie; i <= zakonczenie; i++) {
//       if (czyLiczbaPierwsza(i)) {
//         liczbyPierwsze.push(i);
//       }
//     }
  
//     return liczbyPierwsze;
//   }
  
//   const rozpoczecie = 1;
//   const zakonczenie = 200;
  
//   const liczbyPierwszeZakres = znajdzLiczbyPierwszeZakres(rozpoczecie, zakonczenie);
//   console.log("Liczby pierwsze w zakresie od " + rozpoczecie + " do " + zakonczenie + ":");
//   console.log(liczbyPierwszeZakres);
  