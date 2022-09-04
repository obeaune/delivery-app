export const convertedValue = (value) => new Intl
  .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
  .format(Number(value));

export const formatDate = (date) => `${new Date(date)
  .getDate()}/${new Date(date).getMonth() + 1}/${new Date(date).getFullYear()}`;

export const sellerDate = (date) => `${new Date(date)
  .getDate().padStart(2, '0')}/${new Date(date)
  .getMonth() + 1}/${new Date(date).getFullYear()}`;
