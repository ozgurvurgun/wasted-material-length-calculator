let real_sotck_length = 6000;
let stock_length = 6000;
let stock_length_plus = 6000;
let parts = [
  {
    request_length: 312,
    request_number: 12,
    possibility_values: [],
  },
  {
    request_length: 800,
    request_number: 15,
    possibility_values: [],
  },
  {
    request_length: 462,
    request_number: 8,
    possibility_values: [],
  },
];

let parts_sum = 0;
let totals_parth_length = 0;
parts.forEach((element) => {
  parts_sum = element.request_length * element.request_number;
  totals_parth_length += parts_sum;
});
while (true) {
  if (totals_parth_length > stock_length) {
    stock_length += stock_length_plus;
  } else {
    break;
  }
}
let difference = stock_length - totals_parth_length;
let added_stock = stock_length / real_sotck_length;
let result = [];
let total = 0;
let pawn = 0;
let end = 0;
let yeto_artik = 0;
let gecici = 0;

while (true) {
  for (let i = 0; i < parts.length; i++) {
    for (let j = 0; j < added_stock; j++) {
      parts[i].possibility_values[j] = Math.floor(
        Math.random() * (parts[i].request_number + 1)
      );
    }
    while (true) {
      for (let bal = 0; bal < added_stock; bal++) {
        gecici = parts[i].possibility_values[bal];
        yeto_artik += gecici;
      }
      if (yeto_artik == parts[i].request_number) {
        break;
      }
      for (let j = 0; j < added_stock; j++) {
        parts[i].possibility_values[j] = Math.floor(
          Math.random() * (parts[i].request_number + 1)
        );
      }
      yeto_artik = 0;
    }
    console.log(parts);
  }
  for (let k = 0; k < added_stock; k++) {
    for (let l = 0; l < parts.length; l++) {
      pawn = parts[l].request_length * parts[l].possibility_values[k];
      total += pawn;
    }
    result.push(total);
    total = 0;
  }

  for (let o = 0; o < result.length; o++) {
    end += result[o];
  }

  if (end == totals_parth_length) {
    real_sotck_length;
    console.log("Stok parça uzunluğu: " + real_sotck_length + " birim");
    console.log(
      "Gereken stok parça miktarı: " + real_sotck_length + "x" + added_stock
    );
    console.log("totatlll  :::  " + totals_parth_length);
    console.log("Kullanılan Malzeme birim uzunluğu: " + end);
    console.log("Fire: " + difference + " birim");
    console.log(parts);
    break;
  }
  end = 0;
  result = [];
}

console.log(Math.floor(Math.random()));
console.log(    Math.floor( Math.random() * 22 /2)   )
