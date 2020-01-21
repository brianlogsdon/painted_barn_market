import formatMoney from '../lib/formatMoney';

describe('formatMoney Function', () => {
    it('works with fractional dollars', () => {
        expect(formatMoney(1)).toEqual('$0.01');
        expect(formatMoney(10)).toEqual('$0.10');
        expect(formatMoney(45)).toEqual('$0.45');
    });
    it('leaves cents off for whole dollars', () => {
        expect(formatMoney(100)).toEqual('$1');
    });
    it('works with whole and fractional', () => {
        expect(formatMoney(5014)).toEqual('$50.14');
    });
});