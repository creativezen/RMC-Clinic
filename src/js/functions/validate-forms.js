import JustValidate from 'just-validate';
import Inputmask from "inputmask";

const validationConfig = {
  errorFieldCssClass: 'is-invalid',
  lockForm: true,
}

export const validateForms = (selector, rules, showSuccess) => {
  const form = document?.querySelector(selector);
  const telSelector = form?.querySelector('input[type="tel"]');

  if (!form) {
    console.error('Нет такого селектора!');
    return false;
  }

  if (!rules) {
    console.error('Вы не передали правила валидации!');
    return false;
  }

  if (telSelector) {
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);

    for (let item of rules) {
      if (item.tel) {
        item.rules.push({
          rule: 'function',
          validator: function() {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length === 10;
          },
          errorMessage: 'Заполните телефон!'
        });
      }
    }
  }

  const validation = new JustValidate(selector, validationConfig);

  for (let item of rules) {
    validation
      .addField(item.ruleSelector, item.rules);
  }

  validation.onSuccess((ev) => {
    let ibBlock = ev.target.querySelector('input[name="IBLOCK_ID"]')
    let formData = new FormData(ev.target)
    let xhr = new XMLHttpRequest()

    formData.append("web_form_submit", "Y")

    xhr.onreadystatechange = function () {

      if (xhr.readyState === 4) {
        if (xhr.status === 200 && ibBlock) {
          showSuccess(ev.target)
          console.log('Строка с ответом: ', xhr)
          console.log('Успешно отправлено')
        }
        if (xhr.status === 200 && xhr.responseURL.indexOf('formresult=addok') !== -1) {
          showSuccess(ev.target)
          console.log('Строка с ответом: ', xhr)
          console.log('Успешно отправлено')
        }
      }
    }

    xhr.open('POST', '/local/form/ajax.php', true)
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
    xhr.send(formData)
    ev.target.reset()
  })
};
