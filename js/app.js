// comment
"use strict";

const serviceRequest = document.getElementById('service-request');
const aside = document.querySelector('.aside');
const closeBtn = document.querySelector('.close-btn');
serviceRequest.addEventListener('click', function(){
    aside.classList.toggle('show-aside');
})
closeBtn.addEventListener('click', function(){
    aside.classList.remove('show-aside');
})


let ar = [1, 2, 4, 6];
for (let i=0; i<ar.length; i++){
    console.log(ar[i]);
}

ar.forEach(function(i){
    console.log(i);
})