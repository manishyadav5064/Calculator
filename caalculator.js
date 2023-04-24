let btns = document.querySelectorAll(".buttons");
let display= document.querySelector(".display");

let string1="";

Array.from(btns).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerText == '=')
        {
            string1 = eval(string1);
            display.value = string1;
        }
        else if(e.target.innerText == 'AC'){
            string1 = "";
            display.value = string1;
        }
        else if(e.target.innerText == 'C'){
            string1 = string1.slice(0, -1);
            display.value = string1;
        }
        else{
            string1 = string1 + e.target.innerText ;
        

           display.value =string1;

        }
        
    })
})

