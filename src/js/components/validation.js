import { validateForms } from '../functions/validate-forms'
import { modal } from './modal'

// Колбэки после успешной валидации
// =======================================
const showError = () => console.log('Произошла ошибка...')

const success = document.querySelector('.js-modal-success')

const showSuccess = () => {

  success.classList.add('graph-modal-open')
  modal.modalContainer.classList.remove('animate-open');
  modal.modalContainer.classList.remove('fade');
  modal.modalContainer.classList.remove('graph-modal-open')

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('graph-modal') && e.target.classList.contains("is-open")) {
      success.classList.remove('graph-modal-open')
    }
    if (e.target.closest('.js-close')) {
      success.classList.remove('graph-modal-open')
    }
  })
}

// Параметры валидации для Заказать звонок
// =======================================
const rulesForCall = [
  {
    ruleSelector: '.input-tel',
    tel: true,
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
    ruleSelector: '.input-agree',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Вы не дали согласине на обработку персональных данных'
      }
    ]
  }
]

// Параметры валидации для Задать вопрос
// =====================================
const rulesForQuestion = [
  {
    ruleSelector: '.input-tel',
    tel: true,
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
    ruleSelector: '.select-direction',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Должно быть выбрано направление'
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
  },
  {
    ruleSelector: '.input-agree',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Вы не дали согласине на обработку персональных данных'
      }
    ]
  }
]

// Параметры валидации для Письмо директору
// =======================================
const rulesForDirector = [
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
    ruleSelector: '.input-tel',
    tel: true,
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.input-city',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Укажите населённый пункт'
      }
    ]
  },
  {
    ruleSelector: '.input-message',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Напишите ваше сообщение'
      }
    ]
  },
  {
    ruleSelector: '.input-agree',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Вы не дали согласине на обработку персональных данных'
      }
    ]
  }
]

// Параметры валидации для Записаться на приём
// ===========================================
const rulesForАppointment = [
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
    ruleSelector: '.input-tel',
    tel: true,
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.select-direction',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Должно быть указано направление'
      }
    ]
  },
  {
    ruleSelector: '.input-date',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Выберите дату'
      }
    ]
  },
  {
    ruleSelector: '.input-agree',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Вы не дали согласине на обработку персональных данных'
      }
    ]
  }
]

// Параметры валидации для Оставить отзыв
// =======================================
const rulesForFeedback = [
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
    ruleSelector: '.select-direction',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Должно быть выбрано направление'
      }
    ]
  },
  {
    ruleSelector: '.select-point',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Должна быть выбрана оценка'
      }
    ]
  },
  {
    ruleSelector: '.input-message',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Напишите ваш отзыв'
      }
    ]
  },
  {
    ruleSelector: '.input-agree',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Вы не дали согласине на обработку персональных данных'
      }
    ]
  }
]

// Параметры валидации для Связаться с нами
// =======================================
const rulesForContact = [
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
    ruleSelector: '.input-tel',
    tel: true,
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.input-city',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Укажите населённый пункт'
      }
    ]
  },
  {
    ruleSelector: '.input-message',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Напишите ваш отзыв'
      }
    ]
  },
  {
    ruleSelector: '.input-agree',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Вы не дали согласине на обработку персональных данных'
      }
    ]
  }
]

// Параметры валидации для Запросить документы для ФНС
// ===================================================
const rulesForFns = [
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
    ruleSelector: '.input-tel',
    tel: true,
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.input-agree',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Вы не дали согласине на обработку персональных данных'
      }
    ]
  }
]

// Параметры валидации для Консультация онколога
// ===============================================
const rulesService = [
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
    ruleSelector: '.input-tel',
    tel: true,
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.input-date',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Выберите дату'
      }
    ]
  },
  {
    ruleSelector: '.input-agree',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Вы не дали согласине на обработку персональных данных'
      }
    ]
  }
]

// Параметры валидации для Запись на приём к Урологу
// =============================================
const rulesUrolog = [
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
    ruleSelector: '.input-tel',
    tel: true,
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.select-direction',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Должна быть выбрана услуга'
      }
    ]
  },
  {
    ruleSelector: '.input-date',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Выберите дату'
      }
    ]
  },
  {
    ruleSelector: '.input-agree',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Вы не дали согласине на обработку персональных данных'
      }
    ]
  }
]

// Параметры валидации для Отклика на вакансию
// =============================================
const rulesVacancia = [
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
    ruleSelector: '.input-tel',
    tel: true,
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.input-url',
    tel: true,
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Укажите ссылку на ваше резюме'
      }
    ]
  },
  {
    ruleSelector: '.input-message',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Напишите ваше сообщение'
      }
    ]
  },
  {
    ruleSelector: '.input-agree',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Вы не дали согласине на обработку персональных данных'
      }
    ]
  }
]

// Заказ звонка
// ==========================================
validateForms('.js-form-call', [...rulesForCall], showSuccess)

// Задать вопрос
// ==========================================
validateForms('.js-form-question', [...rulesForQuestion], showSuccess)

// Письмо директору
// ==========================================
validateForms('.js-form-director', [...rulesForDirector], showSuccess)

// Записаться на приём
// ==========================================
validateForms('.js-form-appointment', [...rulesForАppointment], showSuccess)

// Оставить отзыв
// ==========================================
validateForms('.js-form-feedback', [...rulesForFeedback], showSuccess)

// Связаться с нами
// ==========================================
validateForms('.js-form-contact', [...rulesForContact], showSuccess)

// Запросить документы для ФНС
// ==========================================
validateForms('.js-form-fns', [...rulesForFns], showSuccess)

// Запись на консультацию к онкологу
// ==========================================
validateForms('.js-form-service', [...rulesService], showSuccess)

// Запись на приём к онкологу
// ==========================================
validateForms('.js-form-appointment-urolog', [...rulesUrolog], showSuccess)

// Отклик на вакансию
// ==========================================
validateForms('.js-form-vacancia', [...rulesVacancia], showSuccess)