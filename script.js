let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = ()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


const sr = ScrollReveal({
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
})

sr.reveal('.text',{delay:200,origin:'top'})
sr.reveal('.form-container form',{delay:800,origin:'left'})
sr.reveal('.heading',{delay:800,origin:'top'})
sr.reveal('.ride-container .box',{delay:600,origin:'top'})
sr.reveal('.service-container .box',{delay:600,origin:'top'})
sr.reveal('.about-container .box',{delay:600,origin:'top'})
sr.reveal('.review-container',{delay:600,origin:'top'})
sr.reveal('.newletter',{delay:400,origin:'bottom'})


var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
