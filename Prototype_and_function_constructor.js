'use strict'

const items = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    available: 7,
    holded: 0
  },
  {
    title: 'Ховерборд Mattel 2016',
    available: 4,
    holded: 5
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    available: 1,
    holded: 1
  }
];

const itemPrototype = {
  sell(field, amount = 1) {
    if (this[field] < amount) {
      throw `Недостаточно товара для продажи (${this[field]} из ${amount})`
    }
    this[field] -= amount;
    return true;
  },
  sellHolded(amount = 1) {
    self = this;
    return itemPrototype.sell.call(self, 'holded', amount);
  },
  sellAvailable(amount = 1) {
    self = this;
    return itemPrototype.sell.call(self,'available', amount);
  }
};

// 1

function sellItem(item, amount, isHolded = false) {
  try {
    if (isHolded) {
        if (item.holded >= amount)  {
        itemPrototype.sellHolded.call(item, amount);
      } else {
        throw 'Нехватка товара на складе';
      }
    }
    else{
      if (item.available >= amount) {
        itemPrototype.sellAvailable.call(item, amount);
      } else {
          throw 'Нехватка товара на складе';
      }
    }
  }
  catch(err){
    console.log(`ошибка ${err}`)
  }
};


sellItem(items[2], 1);
console.log(items[2].available); // 0
console.log(items[2].holded); // 1

sellItem(items[1], 4, true);
console.log(items[1].available); // 4
console.log(items[1].holded); // 1

const item = { available: 0, holded: 1 };
sellItem(item, 1, true);
console.log(item.available); // 0
console.log(item.holded); // 0

// 2

console.log('-----------------------------------------')

function formatFull() {
  return `${this.title}:\n\tдоступно ${this.available} шт.\n\tв резерве ${this.holded} шт.`;
}

function formatLite() {
  return `${this.title} (${this.available} + ${this.holded})`;
}

function show(format) {
  for (var num in items) {
    console.log(format.call(items[num]));
  }
}

function showItems(list, formatter)  {
  show.call(list, formatter)
}

showItems(items, formatFull);
console.log('---');
showItems(items[0], formatLite);

// 3

console.log('-----------------------------------------')

function createButton(title, onclick) {
  return {
    title,
    onclick,
    click() {
      this.onclick.call(this);
    }
  };
}

function createBuyButtons(lst)  {
  var arr = [];
  for (var num in lst)  {
    function func()   {
      console.log(`${this.title} добавлен в корзину`)
    }
    arr.push(createButton.call(lst[num], lst[num].title, func))
  }
  return arr
}

const buttons = createBuyButtons(items)
buttons[0].click();
buttons[2].click();
buttons[1].click();
