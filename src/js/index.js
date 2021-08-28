"use strict";
let check =0;
const btnMenu = document.querySelector('.btn-menu-link');
const nav = document.querySelector('.nav__list');
btnMenu.addEventListener("click", (evt)=>{
    evt.preventDefault();
    if(check===0){
        btnMenu.innerHTML='&#10005;';
        nav.style.display='flex';
        check=1;
    }
    else{
        btnMenu.innerHTML='&#9776;';
        nav.style.display='none';
        check=0;
    }
    
});