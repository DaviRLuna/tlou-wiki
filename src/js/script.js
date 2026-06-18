const div_1 = document.querySelector('.div-teste')
const text = document.querySelector('.text-history')


function clickbtn() {
    console.log('deu certo PAE')
    if(div_1.style.height ==='auto') {
        div_1.style.height = '200px'
        text.style.fontSize = '0px'
    }
    else {
        div_1.style.height = 'auto'
         text.style.fontSize = '1.2rem'
    }
}