export const formatMoney = (number) => {
  try {
    if (Number.isFinite(Number(number))) {
      let money = Math.ceil(parseFloat(number) * 100) / 100;
      money = money.toFixed(2).split('.');
      money[0] = `${money[0].split(/(?=(?:...)*$)/).join(',')}`;
      return money.join('.');
    }
    return '0.00';
  } catch (e) {
    return '0.00';
  }
};

export const calcMonthlyAmount = (amount, amountMonth) => `$${(formatMoney(amount / amountMonth))}`;

export default formatMoney;
