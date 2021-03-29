/*export default number => {
    let factorial = 1;
    for(let i = number; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}*/




/*const getFactorial = (number) =>{
    if(typeof number !== 'number') throw new TypeError(typeErrorMessage);

    if(number < 0 || number > 20) throw new RangeError(rangeErrorMessage);
 
    if(number === 1 || number === 0) return 1;

    return number * getFactorial(number - 1);
}*/

import { typeErrorMessage, rangeErrorMessage } from './utils'

//Função refatorada
const getFactorial = (number) => {
    const isNotNumber = typeof number !== 'number';
    const isNumberOutOfRange = number < 0 || number > 20;
    const isNumberOneOrZero = number === 1 || number === 0;

    //validações
    if(isNotNumber) throw new TypeError(typeErrorMessage);
    if(isNumberOutOfRange) throw new RangeError(rangeErrorMessage);

    //return number === 1 || number === 0 ? 1 : number * getFactorial(number - 1);
    return isNumberOneOrZero ? 1 : number * getFactorial(number - 1);
}

export default getFactorial;