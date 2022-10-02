const btn = document.querySelector('.btn');
btn.addEventListener("mouseover",()=>{
    document.querySelector('.res').innerHTML = 'hi'
})
btn.addEventListener("mouseout",()=>{
    document.querySelector('.res').innerHTML = ''
    
})
