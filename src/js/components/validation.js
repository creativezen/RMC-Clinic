import { validateForms } from '../functions/validate-forms'


// Параметры валидации для Заказать звонок
// =======================================
const rulesForCall = [
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя'
      }
    ]
  }
]

// Параметры валидации для Заказать звонок
// =======================================
const rulesForQuestion = [
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя'
      }
    ]
  },
  {
    ruleSelector: '.input-mail',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните email'
      }
    ]
  },
  {
    ruleSelector: '.input-question',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Напишите свой вопрос'
      }
    ]
  }
]

// Колбэк после успешной валидации
// =======================================
// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// Заказ звонка
// ==========================================
validateForms('.js-form-call', [...rulesForCall, {
  ruleSelector: '.input-agree',
  rules: [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не дали согласине на обработку персональных данных'
    }
  ]
}]);

// Задать вопрос
// ==========================================
validateForms('.js-form-question', [...rulesForQuestion, {
  ruleSelector: '.input-agree',
  rules: [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не дали согласине на обработку персональных данных'
    }
  ]
}]);