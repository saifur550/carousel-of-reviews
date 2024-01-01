// set initial count 
let count = 0

//select button & value 

let value = document.querySelector('#value')
let buttons = document.querySelectorAll('.btn')

buttons.forEach(element => {
    element.addEventListener('click' , function(e){

        let styles = e.currentTarget.classList; 
        if(styles.contains('decrease')){
            count--;
        } else if(styles.contains('increase')){
            count++;
        }else{
            count = 0 ;
        }

        if(count > 0){
            value.style.color = "green"; 
        }
        if(count < 0 || count < 0 ){
            value.style.color = "black"; 
        }
        if(count===0){
            value.style.color = "pink"; 
        }
        value.textContent = count;

    })
});