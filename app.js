console.log("limked");

let nav_bar=document.getElementsByClassName('nav-bars')[0];
let togglebtn=document.getElementsByClassName('bars')[0];
let closebtn=document.getElementsByClassName('close')[0];
togglebtn.addEventListener('click',()=>{
    nav_bar.classList.toggle('active');
    togglebtn.style.display="none";
    closebtn.style.display="block"
    
    console.log("object")
});

closebtn.addEventListener('click',()=>{
    togglebtn.style.display="block";
    nav_bar.classList.toggle('active');
    closebtn.style.display="none"
    
})

// togglebtn.addEventListener('click',()=>{
//     nav_bar.classList.toggle('active');
//     togglebtn.style
// });