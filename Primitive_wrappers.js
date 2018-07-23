'use strict'

// 1

function showSpecialPrice() {
  console.log('Введен секретный код. Все цены уменьшены вдвое!');
}


function fixAmount(amount) {
  if (typeof(amount) === 'string') {
    let result = parseFloat(amount.replace(/,/, '.').match(/[\d.]+/));
    return (isNaN(result)) ? -1 : result;
  }
  return amount;
}

const orders = [
  { price: 21, amount: 4 },
  { price: 50, amount: '17 штук' },
  { price: 7, amount: '1,5 килограмма' },
  { price: 2, amount: ' 2.7 метра ' },
  { price: 1, amount: 'семь единиц' }
];

for (let order of orders) {
  let result = fixAmount(order.amount);
  console.log(`Заказ на сумму: ${result * order.price} Q`);
}

//2

var secret_code = '';
var detect = 0

var keys = ['2', '4', 'R', '2', 'd', '2', 'R', '2', 'd', '2'];
for (let key of keys) {
  handleKey(key);
}

function handleKey(key)   {
  secret_code += key
  if (secret_code.toLowerCase().slice(-4) === 'r2d2')  {
    if (detect < 1) {
      showSpecialPrice()
      detect += 1
    }
  }
}

var rrrr = '345'
console.log(typeof(+rrrr))

// 3

const data = [
  '12,Телепорт бытовой VZHIH-101 ,17,10000',
  '77, Меч световой FORCE (синий луч), 2,57000'
];

function parseData(Settings, info_data, split_sign = ',') {
  let result = [];
  for (let info of info_data) {
    let lineData = info.split(split_sign);
    let setLine = {};
    for (let i = 0; i < Settings.length; i++) {
      setLine[Settings[i]] = lineData[i];
    }
    result.push(setLine);
  }
  return result;
}

let items = parseData(['id', 'name', 'amount', 'price'], data);
console.log(items);
