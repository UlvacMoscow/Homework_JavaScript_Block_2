'use strict'

var positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    producer: {
      name: 'Рязанский телепортостроительный завод',
      deferPeriod: 10,
      lot: 3
    },
    price: 10000
  },
  {
    title: 'Ховерборд Mattel 2016',
    producer: {
      name: 'Волжский Ховерборд Завод',
      deferPeriod: 24,
      lot: 14
    },
    price: 9200
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    producer: {
      name: 'Тульский оружейный комбинат',
      deferPeriod: 5,
      lot: 1
    },
    price: 57000
  }
];

//1

function lotCalculator(offer, amount)  {
  var lots = Math.ceil(amount / offer['producer']['lot']);
  var total = lots *offer['producer']['lot'] * offer['price'];
  return {lots : lots, total : total};
};

let result1 = lotCalculator(positions[1], 15);
let result2 = lotCalculator(positions[2], 1);
console.log(result1);
console.log(result2);
console.log('----------------------------------------------');

//2

const deferedPayments = [];
const producer = {
  name: 'Рязанский телепортостроительный завод',
  deferPeriod: 10
};

function deferPay(offer, total, time_shipping) {
  //console.log(time_shipping)
  //let now = new Date(time_shipping);
  let paymentDate = new Date(time_shipping);
  //console.log(paymentDate)
  paymentDate.setDate(paymentDate.getDate() + offer.deferPeriod);
  let new_positions = {}
  new_positions.producer = offer;
  new_positions.amount = total;
  new_positions.paymentDate = paymentDate;
  //console.log(new_positions)
  deferedPayments.push(new_positions)
};

//console.log(new_positions)

deferPay(producer, 7200, new Date(2030, 4 - 1, 10));
//deferPay(positions[0].producer, 10500, new Date(2010, 9, 5))
//deferPay(positions[2].producer, 101500, new Date(2011, 9, 5))


console.log(deferedPayments.length); // 1
console.log(deferedPayments[0].producer.name); // Рязанский телепортостроительный завод
console.log(deferedPayments[0].amount); // 7200
console.log(deferedPayments[0].paymentDate); // Sat Apr 20 2030 00:00:00 GMT



for (var num = 0; num < deferedPayments.length; num++) {
  console.log(`${deferedPayments[num].paymentDate.toLocaleDateString('ru-Ru')}: ${deferedPayments[num].producer}, сумма ${deferedPayments[num].amount} Q`)
};
console.log('----------------------------------------------')

// 3

function loadCurrencyJSON() {
  return '{"AUD":44.95,"AZN":33.73,"GBP":73.42,"AMD":0.12,"BYN":30.96,"BGN":32.01,"BRL":18.8,"HUF":0.2,"DKK":8.42,"USD":58.85,"EUR":62.68,"INR":0.88,"KZT":0.18,"CAD":44.74,"KGS":0.85,"CNY":8.55,"MDL":2.94,"NOK":7.02,"PLN":14.55,"RON":13.92,"ZZZ":79.91,"SGD":41.36,"TJS":7.43,"TRY":15.97,"TMT":16.84,"UZS":0.02,"UAH":2.16,"CZK":2.32,"SEK":6.6,"CHF":58.69,"ZAR":4.4,"KRW":0.05,"JPY":0.52}';
}

function convertCurrency(amount, frm, to)  {
  try{
    let json_text = loadCurrencyJSON();
    json_text = JSON.parse(json_text);
    //console.log(json_text)
    return ((json_text[frm] * amount / json_text[to]).toFixed(2));
  }
  catch(e)  {
    console.log(`Ошибка ${e.name} : сообщение ${e.message}`)
  }

}

let price1 = convertCurrency(7000, 'ZZZ', 'USD');
console.log(`Сумма ${price1} USD`);


let price2 = convertCurrency(790, 'EUR', 'ZZZ');
console.log(`Сумма ${price2} ZZZ`);
// Сумма 619.66 ZZZ
