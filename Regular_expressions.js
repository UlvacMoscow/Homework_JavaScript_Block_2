'use strict'

// 1

function checkCoupon(code) {
  var str = code.toLowerCase().replace(/\s/g, '').replace(/[^\w\s]|_/g, "");
  if ((str === str.split('').reverse().join(''))&&(str.length >= 10)) {
    //console.log(str, '--------------', str.split('').reverse().join(''))
    return true;
  }
}

let codes = [
  'Madam, I’m Adam',
  'A man, a plan, a canal. Panama',
  '----<-------Eve------->-----',
  '[__777-x-44-x-777__]',
  '1234564321',
  'Olson in Oslo'
];

for (let code of codes) {
  let result = checkCoupon(code) ? 'подходит' : 'не подходит';
  console.log(`Код «${code}» ${result}`);
}

console.log('---------------------------------------------');
// 2

function stripTags(text)  {
  var str = text.replace(/<\/?[a-z][a-z0-9]*>/gi, "");
  return str;
}

const texts = [
  '<strong>Наши</strong> <em>ховерборды</em> лучшие в <u>мире</u>!',
  '<EM>Световой меч</EM> в <strong>каждый</strong> дом!',
  '2 < 4 5 > 3'
];

for (let text of texts) {
  console.log(stripTags(text));
}

console.log('---------------------------------------------');

// 3

const fields = [
  { name: 'name', rule: /^[a-z ]{5,}$/i },
  { name: 'email', rule: 'email' },
  { name: 'phone', rule: 'phone' },
];

const forms = [
  { name: 'Ivan Ivanov', email: 'ivan@test.co', phone: '+79212753690' },
  { name: 'III', email: 'ivan@test', phone: '11111' },
  { name: 'Ivan Ivanov' },
  { name: 'Ivan Ivanov', email: 'ivan@test.ru', phone: '+79212753690' },
  { phone: '+79212753609' },
  { phone: '+79212753690', email: 'ivantest' }
];

const defaultRules = {
   phone : /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
   email : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/
}

function validate(form, fields) {
  for (let field of fields) {
    let rule = defaultRules[field.name];
    if (rule === undefined) {
      rule = field.rule;
    }
    if(!rule.test(form[field.name])) {
      return false;
    }
  }
  return true;
}

for (let form of forms) {
  if (validate(form, fields)) {
    console.log('Ошибок нет');
  } else {
    console.log('Форма заполнена неверно');
  }
}


/*function validate(form, fields) {

  const nameEX = fields[0].rule;
  let name = true;
  let email = true;
  let phone = true;
  for (var field of fields) {
    console.log(form.name)
    if (form.email in form)  {
      console.log('11111111111111111111111 email', email)
      email = emailEX.test(form.email)
      console.log('222222222222222222222222 email', email)
      }
    if (form.phone in form)  {
      console.log('333333333333333333333333333 phone', phone)
      phone = phoneEX.test(form.phone);
      console.log('44444444444444444444 phone',phone)
      }
    if (form.name in form)  {
      console.log('5555555555555555555551 name', name)
      name = nameEX.test(form.name)
      console.log('666666666666666666661 name', name)
      }
    }
  return name && email && phone;
}
    /*if (typeof field.rule === 'string') {
      switch (field.name) {
        case 'email' :
        console.log('111111111111111', email)
        email = emailEX.test(form.email)
        console.log('2222222222222222', email)
        break;
        case 'phone' :
        console.log('3333333333333333333333', phone)
          phone = phoneEX.test(form.phone);
          console.log('444444444444444444441',phone)
        break;

      }
    }*/


      /*
    if (field.name === 'email')  {
      email = false;
      if (emailEX.test(form.email))  {
        email = true;
        }
      }
    if (field.name === 'phone') {
      phone = false;
      if (phoneEX.test(form.phone)) {
        phone = true;
        }
      }
    }*/
