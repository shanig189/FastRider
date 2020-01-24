const isEven = (n) => {
  n = Number(n);
  return n === 0 || !!(n && !(n%2));
}

const digitsCalculation = (digits) => {
  let sum = 0;

  while (digits) {
    sum += digits % 10;
    digits = Math.floor(digits / 10);
  }

  return sum;
}

export const isValidPinCode = (pin) => {
  const pinPatternRegex = /^JN-[0-9]{4}-[0-9]{4}-[A-Z]{2}/;
  let splitedPin = null;
  let isValidPin = false;

  if(pinPatternRegex.test(pin)){
    splitedPin = pin.split('-');
    let sumArray = [0, 0];
    
    for(let i = 1, sumIndex = 0; i < splitedPin.length-1; i++, sumIndex++){
      let calc = 0;
      for(let j = 0, z = 1; j < splitedPin[i].length; j++, z++){
        if(isEven(z)){
          calc = 2 * Number(splitedPin[i][j]);
          if(calc > 9){
            calc = digitsCalculation(calc);
          }
          sumArray[sumIndex] += calc;
        }else{
          calc = 1 * Number(splitedPin[i][j]);
          if(calc > 9){
            calc = digitsCalculation(calc);
          }
          sumArray[sumIndex] += calc;
        }

        calc = 0;
      }
      sumArray[sumIndex] = (sumArray[sumIndex] % 26) + 65;
    }

    const lastLetters = `${String.fromCharCode(sumArray[0].toString())}${String.fromCharCode(sumArray[1].toString())}`;

    isValidPin = lastLetters === splitedPin[3];

  }

  return isValidPin;
}

export const isElementAtTop = (el) => {
  const elementTop = el.offsetTop;
  const body = document.body; 
  const html = document.documentElement;

  return (
    body.scrollTop >= elementTop ||
    html.scrollTop >= elementTop
  );
}