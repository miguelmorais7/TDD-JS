import getFactorial from './factorial'
import { typeErrorMessage, rangeErrorMessage } from './utils'

describe('Happy Path', () => {
    test('getFactorial deve ser uma função', () => {
        expect(getFactorial).toBeInstanceOf(Function)
    });
    
    test('getFactorial(3) deve retornar 6', () => {
        const atual = getFactorial(3);
        const esperado = 6;
    
        expect(atual).toBe(esperado);
    });
    
    test('getFactorial(4) deve retornar 24', () => {
        const atual = getFactorial(4);
        const esperado = 24;
    
        expect(atual).toBe(esperado);
    });
});

describe('Unhappy Path', () => {
    test('getFactorial() deve lançar um TypeError', () => {
        try{
            getFactorial();
        }catch({ name }){ // ou error
            expect(name).toBe('TypeError');
        }
    });

    test(`getFactorial() deve lançar um TypeError com a mensagem "${typeErrorMessage}"`, () => {
        try {
            getFactorial();
        } catch ({ message }) { // ou error
            expect(message).toBe(typeErrorMessage);
        }
    });

    test('getFactorial(0) deve retornar 1', () => {
        const atual = getFactorial(0);
        const esperado = 1;

        expect(atual).toBe(esperado);
    });

    test('getFactorial(-1) deve lançar um RangeError', () => {
        try {
            getFactorial(-1);
        } catch ({ name }) {
            expect(name).toBe('RangeError');
        }
    });

    test(`getFactorial(-1) deve lançar um RangeError com a mensagem "${rangeErrorMessage}"`, () => {
        try {
            getFactorial(-1);
        } catch ({ message }) { // ou error
            expect(message).toBe(rangeErrorMessage);
        }
    });
});

