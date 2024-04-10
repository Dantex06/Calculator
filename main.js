const firstNum = document.querySelector('.input_a');
const secondNum = document.querySelector('.input_b');
const markButton = document.querySelector('.input_mark');
const outputButton = document.querySelector('.output_button');
const outputResult = document.querySelector('.output_result__num');

outputButton.addEventListener('click', ()=>{
    const a = Number(firstNum.value);
    const b = Number(secondNum.value);
    const mark = markButton.value
    const result = calculator(a, b, mark)
    outputResult.innerHTML = result;
})
