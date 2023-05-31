import { validateForms } from '../functions/validate-forms'
import { modal } from './modal'

// Модель для Яндекс.Метрика целей
// ===============================
let model = {
	form: {
		'.js-form-call': 'callback',
		'.js-form-question': 'question',
		'.js-form-question-block': 'sendQuestion',
		'.js-form-appointment': 'makeAppointment',
		'.js-form-appointment-block': 'makeAppointment',
		'.js-form-fns': 'taxRefundDocs',
		'.js-form-contact': 'mailUsFooter',
		'.js-form-feedback': 'leaveFeedback',
	},
}

// Колбэки после успешной валидации
// =======================================
const showError = () => console.log('Произошла ошибка...')

// Показываем окно успешной отправки
// =======================================
const showSuccess = form => {
	// Вызываем метод включения сообщения об отправке
	modal.success()
	// После скрытия формы, бежим по инпутам и убираем класс валидного состояния
	Array.from(form.getElementsByTagName('input')).forEach(input =>
		input.classList.remove('just-validate-success-field')
	)
}

// Отправляем данные в яндекс.метрику
// =======================================
const callYandexTarget = selector => {
	console.log('hello from reachGoal:', model.form[selector])
	ym(88920559, 'reachGoal', model.form[selector])
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
				errorMessage: 'Заполните телефон!',
			},
		],
	},
	{
		ruleSelector: '.input-name',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните имя',
			},
		],
	},
	{
		ruleSelector: '.input-agree',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Вы не дали согласине на обработку персональных данных',
			},
		],
	},
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
				errorMessage: 'Заполните телефон!',
			},
		],
	},
	{
		ruleSelector: '.input-name',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните имя',
			},
		],
	},
	{
		ruleSelector: '.input-mail',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните email',
			},
		],
	},
	{
		ruleSelector: '.select-direction',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Должно быть выбрано направление',
			},
		],
	},
	{
		ruleSelector: '.input-question',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Напишите свой вопрос',
			},
		],
	},
	{
		ruleSelector: '.input-agree',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Вы не дали согласине на обработку персональных данных',
			},
		],
	},
]

// Параметры валидации для Задать вопрос
// =====================================
const rulesForQuestionBlock = [
	{
		ruleSelector: '.input-tel',
		tel: true,
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните телефон!',
			},
		],
	},
	{
		ruleSelector: '.input-name',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните имя',
			},
		],
	},
	{
		ruleSelector: '.input-mail',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните email',
			},
		],
	},
	{
		ruleSelector: '.select-direction',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Должно быть выбрано направление',
			},
		],
	},
	{
		ruleSelector: '.input-question',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Напишите свой вопрос',
			},
		],
	},
	{
		ruleSelector: '.input-agree',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Вы не дали согласине на обработку персональных данных',
			},
		],
	},
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
				errorMessage: 'Заполните имя',
			},
		],
	},
	{
		ruleSelector: '.input-mail',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните email',
			},
		],
	},
	{
		ruleSelector: '.input-tel',
		tel: true,
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните телефон!',
			},
		],
	},
	{
		ruleSelector: '.input-city',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Укажите населённый пункт',
			},
		],
	},
	{
		ruleSelector: '.input-message',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Напишите ваше сообщение',
			},
		],
	},
	{
		ruleSelector: '.input-agree',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Вы не дали согласине на обработку персональных данных',
			},
		],
	},
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
				errorMessage: 'Заполните имя',
			},
		],
	},
	{
		ruleSelector: '.input-tel',
		tel: true,
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните телефон!',
			},
		],
	},
	{
		ruleSelector: '.select-direction',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Должно быть указано направление',
			},
		],
	},
	{
		ruleSelector: '.select-service',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Должна быть выбрана услуга',
			},
		],
	},
	{
		ruleSelector: '.input-date',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Выберите дату',
			},
		],
	},
	{
		ruleSelector: '.input-agree',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Вы не дали согласине на обработку персональных данных',
			},
		],
	},
]

// Параметры валидации для Записаться на приём из нижнего блока
// ===========================================
const rulesForАppointmentBlock = [
	{
		ruleSelector: '.input-name',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните имя',
			},
		],
	},
	{
		ruleSelector: '.input-tel',
		tel: true,
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните телефон!',
			},
		],
	},
	{
		ruleSelector: '.select-service',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Должно быть указано направление',
			},
		],
	},
	{
		ruleSelector: '.input-date',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Выберите дату',
			},
		],
	},
	{
		ruleSelector: '.input-agree',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Вы не дали согласине на обработку персональных данных',
			},
		],
	},
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
				errorMessage: 'Заполните имя',
			},
		],
	},
	{
		ruleSelector: '.input-mail',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните email',
			},
		],
	},
	{
		ruleSelector: '.select-direction',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Должно быть выбрано направление',
			},
		],
	},
	{
		ruleSelector: '.select-point',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Должна быть выбрана оценка',
			},
		],
	},
	{
		ruleSelector: '.input-message',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Напишите ваш отзыв',
			},
		],
	},
	{
		ruleSelector: '.input-agree',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Вы не дали согласине на обработку персональных данных',
			},
		],
	},
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
				errorMessage: 'Заполните имя',
			},
		],
	},
	{
		ruleSelector: '.input-mail',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните email',
			},
		],
	},
	{
		ruleSelector: '.input-tel',
		tel: true,
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните телефон!',
			},
		],
	},
	{
		ruleSelector: '.input-city',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Укажите населённый пункт',
			},
		],
	},
	{
		ruleSelector: '.input-message',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Напишите ваш отзыв',
			},
		],
	},
	{
		ruleSelector: '.input-agree',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Вы не дали согласине на обработку персональных данных',
			},
		],
	},
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
				errorMessage: 'Заполните имя',
			},
		],
	},
	{
		ruleSelector: '.input-tel',
		tel: true,
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните телефон!',
			},
		],
	},
	{
		ruleSelector: '.input-agree',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Вы не дали согласине на обработку персональных данных',
			},
		],
	},
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
				errorMessage: 'Заполните имя',
			},
		],
	},
	{
		ruleSelector: '.input-mail',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните email',
			},
		],
	},
	{
		ruleSelector: '.input-tel',
		tel: true,
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Заполните телефон!',
			},
		],
	},
	{
		ruleSelector: '.input-url',
		tel: true,
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Укажите ссылку на ваше резюме',
			},
		],
	},
	{
		ruleSelector: '.input-message',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Напишите ваше сообщение',
			},
		],
	},
	{
		ruleSelector: '.input-agree',
		rules: [
			{
				rule: 'required',
				value: true,
				errorMessage: 'Вы не дали согласине на обработку персональных данных',
			},
		],
	},
]

let formAppointmentBlock = document.querySelector('.js-form-appointment-block')
let formQuestionBlock = document.querySelector('.js-form-question-block')
let formFeedbackBlock = document.querySelector('.js-form-feedback-block')
let formContact = document.querySelector('.js-form-contact')
let formVacancia = document.querySelector('.js-form-vacancia')
let formFeedback = document.querySelector('.js-form-feedback')

// Заказ звонка
// ==========================================
validateForms('.js-form-call', [...rulesForCall], showSuccess, callYandexTarget)

// Задать вопрос
// ==========================================
validateForms(
	'.js-form-question',
	[...rulesForQuestion],
	showSuccess,
	callYandexTarget
)

// Письмо директору
// ==========================================
validateForms('.js-form-director', [...rulesForDirector], showSuccess)

// Записаться на приём
// ==========================================
validateForms(
	'.js-form-appointment',
	[...rulesForАppointment],
	showSuccess,
	callYandexTarget
)

// Запросить документы для ФНС
// ==========================================
validateForms('.js-form-fns', [...rulesForFns], showSuccess, callYandexTarget)

// Задать вопрос
// ==========================================
if (formQuestionBlock) {
	validateForms(
		'.js-form-question-block',
		[...rulesForQuestionBlock],
		showSuccess,
		callYandexTarget
	)
}

// Записаться на приём
// ==========================================
if (formAppointmentBlock) {
	validateForms(
		'.js-form-appointment-block',
		[...rulesForАppointmentBlock],
		showSuccess,
		callYandexTarget
	)
}

// Связаться с нами
// ==========================================
if (formContact) {
	validateForms(
		'.js-form-contact',
		[...rulesForContact],
		showSuccess,
		callYandexTarget
	)
}

// Отклик на вакансию
// ==========================================
if (formVacancia) {
	validateForms('.js-form-vacancia', [...rulesVacancia], showSuccess)
}

// Оставить отзыв
// ==========================================
if (formFeedback) {
	validateForms(
		'.js-form-feedback',
		[...rulesForFeedback],
		showSuccess,
		callYandexTarget
	)
}

if (formFeedbackBlock) {
	validateForms(
		'.js-form-feedback-block',
		[...rulesForFeedback],
		showSuccess,
		callYandexTarget
	)
}
