import multiavatar from '@multiavatar/multiavatar/esm'


document.querySelector('#nombre').addEventListener('keydown',(event)=>{
    console.log(event.target.value)
    let svgCode = multiavatar(event.target.value)
    document.querySelector('#foto').innerHTML = svgCode

})