const navigation = document.querySelector('.navigation')
    document.querySelector(".toggle").onclick = function(){
        this.classList.toggle('active');
        navigation.classList.toggle('active');
    };

const burger = document.querySelector(".li2");
const sidebar = document.querySelector(".sidebar");

burger.addEventListener("click",function(){
    sidebar.classList.toggle('active');
    sidebar.style.display = "block"
})
