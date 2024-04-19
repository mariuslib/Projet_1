let btns = document.querySelectorAll(".num-btn");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelector("#display-box");
let clearBtn = document.querySelector("#clear");
let delBtn = document.querySelector("#del");



let total = document.querySelector('#total');

let btnSpread = [...btns];
let allBtnSpread=[...allBtns];

//for number inputs
btnSpread.forEach((button,i)=>{
    button.addEventListener("click", ()=>{

        //inner values for calculator

        if(resultBox.innerHTML=="0"){
            resultBox.innerHTML="";
        }
        let value= btns[i].innerHTML;
        resultBox.innerHTML+=value;
    });
});

//to evaluate strings
function evaluate(fn){
    return new Function('return' +fn)();
}
//to calculateinput
total.addEventListener('click',()=>{
    let allInputs= resultBox.innerHTML;

    resultBox.innerHTML=evaluate(allInputs);

    console.log(evaluate(allInputs));
})

//clear all inputs
clearBtn.addEventListener('click',()=>{
    resultBox.innerHTML=0;
})

//clear all inputs
clearBtn.addEventListener('click',()=>{
    resultBox.innerHTML=0;
})

