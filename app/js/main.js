const link1q =document.querySelector('.link1__q');
const link1a=document.querySelector('.link1__a');
const arrow1=document.querySelector('.arrow1');
link1q.addEventListener ('click', (event) =>{
link2q.classList.remove('bold');
link2a.classList.remove('open');
arrow2.classList.remove('rotate');
link3q.classList.remove('bold');
link3a.classList.remove('open');
arrow3.classList.remove('rotate');
link4q.classList.remove('bold');
link4a.classList.remove('open');
arrow4.classList.remove('rotate');
link5q.classList.remove('bold');
link5a.classList.remove('open');
arrow5.classList.remove('rotate');
link1q.classList.toggle('bold');
link1a.classList.toggle('open');
arrow1.classList.toggle('rotate');
})

const link2q =document.querySelector('.link2__q');
const link2a=document.querySelector('.link2__a');
const arrow2=document.querySelector('.arrow2');
link2q.addEventListener ('click', (event) =>{
link1q.classList.remove('bold');
link1a.classList.remove('open');
arrow1.classList.remove('rotate');
link3q.classList.remove('bold');
link3a.classList.remove('open');
arrow3.classList.remove('rotate');
link4q.classList.remove('bold');
link4a.classList.remove('open');
arrow4.classList.remove('rotate');
link5q.classList.remove('bold');
link5a.classList.remove('open');
arrow5.classList.remove('rotate');
link2q.classList.toggle('bold');
link2a.classList.toggle('open');
arrow2.classList.toggle('rotate');
})

const link3q =document.querySelector('.link3__q');
const link3a=document.querySelector('.link3__a');
const arrow3=document.querySelector('.arrow3');
link3q.addEventListener ('click', (event) =>{
link1q.classList.remove('bold');
link1a.classList.remove('open');
arrow1.classList.remove('rotate');
link2q.classList.remove('bold');
link2a.classList.remove('open');
arrow2.classList.remove('rotate');
link4q.classList.remove('bold');
link4a.classList.remove('open');
arrow4.classList.remove('rotate');
link5q.classList.remove('bold');
link5a.classList.remove('open');
arrow5.classList.remove('rotate');
link3q.classList.toggle('bold');
link3a.classList.toggle('open');
arrow3.classList.toggle('rotate');
})

const link4q =document.querySelector('.link4__q');
const link4a=document.querySelector('.link4__a');
const arrow4=document.querySelector('.arrow4');
link4q.addEventListener ('click', (event) =>{
link1q.classList.remove('bold');
link1a.classList.remove('open');
arrow1.classList.remove('rotate');
link2q.classList.remove('bold');
link2a.classList.remove('open');
arrow2.classList.remove('rotate');
link3q.classList.remove('bold');
link3a.classList.remove('open');
arrow3.classList.remove('rotate');
link5q.classList.remove('bold');
link5a.classList.remove('open');
arrow5.classList.remove('rotate');
link4q.classList.toggle('bold');
link4a.classList.toggle('open');
arrow4.classList.toggle('rotate');
})

const link5q =document.querySelector('.link5__q');
const link5a=document.querySelector('.link5__a');
const arrow5=document.querySelector('.arrow5');
link5q.addEventListener ('click', (event) =>{
link1q.classList.remove('bold');
link1a.classList.remove('open');
arrow1.classList.remove('rotate');
link2q.classList.remove('bold');
link2a.classList.remove('open');
arrow2.classList.remove('rotate');
link3q.classList.remove('bold');
link3a.classList.remove('open');
arrow3.classList.remove('rotate');
link4q.classList.remove('bold');
link4a.classList.remove('open');
arrow4.classList.remove('rotate');
link5q.classList.toggle('bold');
link5a.classList.toggle('open');
arrow5.classList.toggle('rotate');
})

