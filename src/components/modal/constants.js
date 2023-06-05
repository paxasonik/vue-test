const InputList = [
  { id: 1, value: '', placeholder: 'Ваше имя', key: 'name', label: 'Имя', type: 'text', maska: { mask: 'Z*', tokens: { 'Z': { pattern: /[а-яёА-ЯЁ\s-]/ }}} },
  { id: 2, value: '', placeholder: '+7', key: 'phone', label: 'Телефон', type: 'tel', maska: { mask: '+7 (Z##) ###-##-##', tokens: { 'Z': { pattern: /[489]/ }}} }
]

const NameModal = 'Добавление пользователя';
const SelectLabel = 'Начальник';
const SelectPlaceholder = 'Выберете начальника';

export {
  InputList,
  NameModal,
  SelectLabel,
  SelectPlaceholder
}
