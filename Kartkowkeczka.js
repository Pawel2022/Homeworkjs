function zad1() {
  const odp_zad_1 = [];
  for (let i = 0; i < 1000; i++) {
    const losowaLiczba = Math.random() * 1002;
    odp_zad_1.push(losowaLiczba);
  }
  return odp_zad_1;
}

function zad2() {
  function czyLiczbaPierwsza(x) {
    if (x <= 1) return false;
    if (x <= 3) return true;
    if (x % 2 === 0 || x % 3 === 0) return false;
    for (let i = 5; i * i <= x; i += 6) {
      if (x % i === 0 || x % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }

  return odp_zad_1.filter(czyLiczbaPierwsza);
}

function zad3() {
  const listaLiczb = zad1();
  const liczbyPierwsze = zad2(listaLiczb);
  return liczbyPierwsze.length;
}

function zad4(a, b) {
  while (b) {
      let temp = b;
      b = a % b;
      a = temp;
  }
  return a;
}

function zad5(a, b) {
  let max = Math.max(a, b);
  while (true) {
    if (max % a === 0 && max % b === 0) {
      return max;
    }
    max++;
  }
}

// function zad6(a) {
//   if (a <= 0) {
//     console.error("Jak checesz mieć odcinek ujemny:3");
//     return [];
//   }

//   const wynik = [];
//   for (let i = 0; i < 3; i++) {
//     const losowaLiczba = Math.random(); 
//     const wartosc = a * losowaLiczba;
//     wynik.push(wartosc);
//   }

//   return wynik;
// }

const odp_zad_1 = zad1();
const odp_zad_2 = zad2(odp_zad_1);
const odp_zad_3 = zad3(odp_zad_1);
const odp_zad_4 = zad4(78, 66);
const odp_zad_5 = zad5(78, 66);
// const odp_zad_6 = zad6(100);


let plusy = 0


if (odp_zad_1.length === 1000) {
    plusy += 1;
    console.log("Task 1 Congrats!");
}
if (odp_zad_2.length === 168) {
    plusy += 1;
    console.log("Task 2 Congrats!");
}
if (odp_zad_3 === 168) {
    plusy += 1;
    console.log("Task 3 Congrats!");
}
if (odp_zad_4 === 6) {
    plusy += 1;
    console.log("Task 4 Congrats!");
}
if (odp_zad_5 === 858) {
    plusy += 1;
    console.log("Task 5 Congrats!");
}
//  if (odp_zad_6.reduce((a, b) => a + b, 0) === 100) {
//      plusy += 1;
//      console.log("Task 6 Congrats!");
// }
console.log(`Twoja ocena to ${plusy}`);
