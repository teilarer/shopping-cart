/* eslint-disable import/prefer-default-export */
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
});
export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
