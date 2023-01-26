bars = document.querySelector("#bars");
navbar = document.querySelector(".nav");

bars.addEventListener("click",function(){
    navbar.classList.toggle('active');
})


magni = document.querySelector("#magni");
form = document.querySelector(".form");

magni.addEventListener("click",function(){
    form.classList.toggle('active');
})