let input = document.querySelector('.input')

let nums = (item)=>{
    input.value += item
}
let c = ()=>{
    input.value = ''
}
let calculate = ()=>{
    input.value = eval(input.value)
}