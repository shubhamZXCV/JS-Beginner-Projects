// targets all the buttons containing numbers
let number = document.querySelectorAll('[data-number]');
//targets the span in the display div
let display = document.querySelector('[data-display]').firstChild;
//targets the clear button
let clear = document.querySelector('[data-clear]');
//targets all the buttons containing some sort of operations
let operations = document.querySelectorAll('[data-operation]');
// targets the equal to button
let equal = document.querySelector('[data-equal]');


let exp = "";
let num = ""


//below event listener is used to control the calculator using keyboard
document.addEventListener('keydown', (e) => {
    if ((e.key >= 0 && e.key <= 9) || e.key=='.') {
        num += e.key;
        display.innerHTML = num;
        exp += e.key;
    }
    else if (e.key == 'Enter') {
        num = "";
        let ans = eval(exp);
        display.innerHTML = ans.toString();
        exp = display.innerHTML;

        operations.forEach((element) => {

            element.style.color = "white";
            element.style.backgroundColor = "#ffa200";

        })

    }
    else if (e.key == '+' || e.key == '-' || e.key == '/' || e.key == '*') {
        exp += e.key;
        num = "";

    }
    else if(e.key=='Backspace'){
        num=num.slice(0,-1);
        display.innerHTML=num;
        exp=exp.slice(0,-1);
    }
    
    
})

//below event listeners is used to use the calculator on mouse click

clear.addEventListener('click', (e) => {
    display.innerHtml = "0";
    exp = "";
    num = "";
})

operations.forEach((element) => {
    element.addEventListener('click', (e) => {
        element.style.color = "rgb(255, 172, 7)";
        element.style.backgroundColor = "white";
        exp += element.innerHTML;
        num = "";
    })
})


number.forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(element.innerHTML);
        // display.innerHTML+=element.innerHTML;
        num += element.innerHTML;
        display.innerHTML = num;
        exp += element.innerHTML;


    })
})

equal.addEventListener('click', (e) => {
    num = "";
    let ans = eval(exp);
    display.innerHTML = ans.toString();
    exp = display.innerHTML;

    operations.forEach((element) => {

        element.style.color = "white";
        element.style.backgroundColor = "#ffa200";

    })
})




