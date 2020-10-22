import {
  formatMoney,
} from '../utils';

it('Retorna um número com formato de moeda', () => {
  expect(formatMoney(-1)).toStrictEqual('-1.00');
  expect(formatMoney(0)).toStrictEqual('0.00');
  expect(formatMoney(0.50)).toStrictEqual('0.50');
  expect(formatMoney(1)).toStrictEqual('1.00');
  expect(formatMoney(1.93)).toStrictEqual('1.93');
  expect(formatMoney(1.9341565)).toStrictEqual('1.93');
  expect(formatMoney(1004)).toStrictEqual('1,004.00');
  expect(formatMoney(1004.53)).toStrictEqual('1,004.53');
  expect(formatMoney(1000004)).toStrictEqual('1,000,004.00');
  expect(formatMoney(1000004.53)).toStrictEqual('1,000,004.53');
  expect(formatMoney(1000000004)).toStrictEqual('1,000,000,004.00');
  expect(formatMoney(1000000004.53)).toStrictEqual('1,000,000,004.53');
});
