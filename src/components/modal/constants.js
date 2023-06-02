const InputList = [
  { id: 1, value: '', label: 'Имя', type: 'text', maska: { mask: 'Z*', tokens: { 'Z': { pattern: /[а-яёА-ЯЁ\s-]/ }}} },
  { id: 2, value: '', label: 'Телефон', type: 'tel', maska: { mask: '+7 (Z##) ###-##-##', tokens: { 'Z': { pattern: /[489]/ }}} }
]

const NameModal = 'Добавление пользователя';

export {
  InputList,
  NameModal
}
