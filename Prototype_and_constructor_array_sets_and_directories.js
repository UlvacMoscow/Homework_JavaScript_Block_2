'use strict'

const clients = [{
  name: 'Филип Фрай',
  email: 'fray@mail.un',
  isSubscribed: false,
  orders: [ 11700, 1980, 450, 5500 ]
}, {
  name: 'Бендер Сгибатель Родригес',
  email: 'bender.rodriges@rambler.un',
  isSubscribed: true,
  orders: [ 440, 226, 7650, 2990, 70 ]
}, {
  name: 'Доктор Джон Зоидберг',
  email: 'zoidberg-md@list.un',
  isSubscribed: true,
  orders: [ 720 ]
}];

// 1

clients.findByName = function (name)  {
  const index = clients.find(function(man) {
  return man.name === name;
})
return index;
}

const clientOne = clients.findByName('Доктор Джон Зоидберг');
console.log(clientOne.email); // zoidberg-md@list.un

const clientTwo = clients.findByName('Люрр');
console.log(typeof clientTwo); // undefined

console.log('-------------------------------------------------')

// 2

const compareByTotalSumm = function (left, right) {
  console.log(left)
  const leftSumm = left.orders.reduce(function (sum, current) {
    return sum + current;
    }, 0);
  const rightSumm = right.orders.reduce(function (sum, current) {
    return sum + current;
    }, 0);
  if (leftSumm > rightSumm) {
    return -1
  } else if (leftSumm === rightSumm) {
    return 0
  } else if (leftSumm < rightSumm) {
    return 1
  }
};

clients
  .sort(compareByTotalSumm)
  .forEach(client => console.log(client.name));


console.log('-------------------------------------------------')

// 3

function sendMail(email) {
  console.log(`Письмо отправлено на адрес ${email}`);
}

function getSubscribedEmails(array) {
  var list = [];
  array.forEach(function(element)  {
      if (element.isSubscribed === true)  {
        list.push(element.email);
      }
    }
  )
  return list;
}


getSubscribedEmails(clients).forEach(sendMail);
