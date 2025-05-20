let input = document.querySelector('.input')

let nums = (item)=>{
    input.value += item
    item.match(/\^(\d+)/)
    if (match) {
        const times = match[1]
        for(let a = 1; a++ ; a>times){
            times*times
        }
    }
}
let c = ()=>{
    input.value = ''
}
let calculate = ()=>{
    input.value = eval(input.value)
}