import { convertPLNToUSD } from './../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
    it('should return proper value when good input', () => {
        expect(convertPLNToUSD(1)).toBe('$0.29');
        expect(convertPLNToUSD(2)).toBe('$0.57');
        expect(convertPLNToUSD(20)).toBe('$5.71');
        expect(convertPLNToUSD(12)).toBe('$3.43');
    });
    it('Sprawdzamy czy będzie NaN jeśli podamy stringa', () => {
       expect(convertPLNToUSD('1')).toBeNaN();
        expect(convertPLNToUSD('text')).toBeNaN();
        expect(convertPLNToUSD('asdawd')).toBeNaN();
        expect(convertPLNToUSD('30')).toBeNaN();
    });
    it('Sprawdzamy czy brak argumentów zwraca NaN', () => {
        expect(convertPLNToUSD()).toBeNaN();
    });
    it('Sprawdzamy czy podanie czegokolwiek innego od liczby i tekstu da Error', () => {
        expect(convertPLNToUSD(null)).toBe('Error');
        expect(convertPLNToUSD({})).toBe('Error');
    });
    it('Sprawdzamy czy wartości ujemne dadzą 0$', () => {
        expect(convertPLNToUSD(-1)).toBe('$0.00');
        expect(convertPLNToUSD(-2)).toBe('$0.00');
        expect(convertPLNToUSD(-20)).toBe('$0.00');
        expect(convertPLNToUSD(-12)).toBe('$0.00');
    });
})